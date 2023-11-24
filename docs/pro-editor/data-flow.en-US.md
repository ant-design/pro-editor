---
title: ProEditor Data Flow Architecture
group:
  title: Framework
  order: 0
---

# Data Flow Architecture for Multi-user Collaboration

In multi-user collaboration, we can divide data models into two major categories based on the usage of the data:

1. **File Data**: Unique data instances (everyone sees the same file data)
2. **Interface Views**: Each person sees their own default view, but when a user chooses to follow someone else, the view completely follows the other person's view

## ProEditor Container Data Flow Architecture

The data flow of ProEditor contains two types:

- Container type, one and only one: `ProEditorStore`;
- Component type, which will be expanded according to future extension situations, currently including `ProTableStore` and `ProLayoutStore`, and may be expanded to include `ProFromStore`, `ProChartStore`, etc. in the future;

The container class Store only stores Editor-related states, such as:

- Developer/designer mode;
- Switching between canvas and code;
- Activation information for the current canvas interaction;
- Currently loaded ComponentAsset instances;
- ...

The component class Store will contain specific component configurations, such as:

- Component configuration information;
- Tabs for switching component panels;
- Previewer collapse status;
- ...

The purpose of this separation is to separate the focus points, making it easier for future extensions.

## Data Flow Circulation Mode

The data flow connection methods are explained from the container layer and the component layer.

### Container Layer

The core function of the container layer is to schedule the communication between the component layer data and external data sources.

Since ProEditor itself is a component, it must support both controlled and uncontrolled modes, which brings great challenges to the architecture of the data flow.

Due to the complexity of the editor's information processing, in the uncontrolled mode, it is fine for the data to be handled entirely by the component itself. But once it comes to the controlled mode, how to synchronize the internal and external states to ensure data consistency, and make it more flexible for component consumers to use, becomes a headache.

For example, the `ProTableStore` has over 20 dispatch methods for the columns data. If these methods are directly exposed to external developers for consumption, external developers may be overwhelmed.

In the previous process of troubleshooting, if using useEffect to listen for external changes and setState, and then onChange for internal state changes, it is very easy to cause a loop of repeated rendering, which is a heavy burden on developers' mental workload.

The following code can be used in relatively simple scenarios, but when we have 10+ operation methods and need to use a reducer, the data flow processing will become a mess.

```tsx | pure
import { useEffect, useState } from 'react';

const useStore = (value, onChange) => {
  const [innerValue, setValue] = useState('');

  useEffect(() => {
    setValue(value);
  }, [value]);

  const innerSetState = (value) => {
    setValue(value);

    onChange(value);
  };
};
```

Therefore, for the final development, the strategy is to use the internal data source as the SoT, and synchronize the external data source into the internal data source according to the situation to achieve state management.

The specific development strategy is as follows:

1. First, as with normal development, create a top-level data source in the Wrapper and pass it down to the child components;
2. Develop the component itself as an uncontrolled component (App), without considering any external controlled values;
3. Use the `StoreUpdater` component as a **glue layer** to isolate the internal application (`App`) from the external data source (`config`, `onConfigChange`, `defaultConfig`, etc.);
4. Determine the methods and objects in the `store` that need data interaction, add `OnChange` in the `internalUpdate` method, and synchronize the external data source to the internal using the `syncOutSource` method;

```tsx | pure
export const Container: FC = (props) => {
  const {
    config,
    onConfigChange,
    defaultConfig,

    ...res
  } = props;

  return (
    <Wrapper>
      <App {...res} />
      <StoreUpdater config={config} defaultConfig={defaultConfig} onConfigChange={onConfigChange} />
    </Wrapper>
  );
};
```
