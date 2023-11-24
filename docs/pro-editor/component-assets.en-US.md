---
title: Assembler Component Metadata Model
group: Framework
---

# Metadata for Complex Components

### Puppet Model

The relationship between high code (props) and low code (configurator) is not a simple one-to-one mapping, but an organic organizational form that we call the Puppet Model. Props are like the strings of a puppet, and the configurator is the puppet's controller. Their relationship is illustrated in the following diagram:

![image.png](https://mdn.alipayobjects.com/huamei_re70wt/afts/img/A*d8rTT4gXf-UAAAAAAAAAAAAADmuEAQ/original)

A structure that is easy to use for the configurator is probably not one-to-one with the component's props. Therefore, we will specifically design a separate data model for the configurator, which we call config.

## Metadata Model

We call the properties of the code props, and the properties of the configurator config. The description of the configurator property definition is called schema. The relationship between them is illustrated in the following diagram:

![image.png](https://mdn.alipayobjects.com/huamei_re70wt/afts/img/A*kSZ-S6Pe0yUAAAAAAAAAAAAADmuEAQ/original) <a name="pCzZe"></a>

- Schema (config): Metadata given to the configurator editor
- Emitter (config -> props): Converts the configurator to code properties
- Parser (props -> config): Parses props into config

Based on this data model, we can theoretically achieve bidirectional conversion between code and assembler.

### Model Structure

The code declaration reflecting the above metadata model is as follows:

```typescript
const model: Model<Config, Props> = {
  key: '',
  schema: (config: Config, store: ProEditorStore): Schema => {},
  parser: (props: Props): Config => {},
  emitter: (config: Config, env: EmmiterEnv): Props => {},
};
```

## ComponentAssets

The above Model reflects the lifecycle of component data flow. Next, let's introduce the description model of component asset metadata, ComponentAssets.

```typescript
export const tableAssetParams = {
  id: 'table',
  // ...

  // Input model
  models: [tableModel, dataModel, toolbarModel],
};
```
