---
title: EditorLayout
atomId: Layout
group: Basic
---

# EditorLayout Basic Layout

EditorLayout is a layout component specifically designed for editor scenarios that we have created.

## Code Demonstration

### Basic Usage

<code src="./demos/basic.tsx"></code>

### Panel Only

You can hide the header and footer configuration by setting both `header` and `footer` to `false`.

<code src="./demos/single.tsx" ></code>

Of course, you can also set `false` for a specific panel to turn off its content.

<code src="./demos/noLeftPannel.tsx" ></code>

### Changing Layout

You can render different structures of layouts by declaring different types.

We divide the layout into 4 types, corresponding to the images below. The default mode is `Bottom`, which is sufficient for most editor scenarios on the market.

![layout-types](https://mdn.alipayobjects.com/huamei_re70wt/afts/img/A*-asvT7GkKIwAAAAAAAAAAAAADmuEAQ/original)

<code src="./demos/types.tsx" ></code>

### Layout Theme Type

You can specify `ThemeType` to switch between some simple layout theme styles.

You can also configure `ThemeType` for each part separately, which will take precedence over the global configuration.

> Note: In `pure` mode, we will remove the spacing between panels, the radius of various parts, and the background color. At this time, if you do not add colors or some special CSS to distinguish each area, it will be difficult to clearly see the different parts.

<code src="./demos/themeType.tsx"></code>

### Dialogue Layout

You can easily build a layout similar to a dialogue content through configuration and styling.

<code src="./demos/dingding.tsx"></code>

## APIs

### LayoutProps

| Property     | Type                          | Description                                                     |
| ------------ | ----------------------------- | --------------------------------------------------------------- |
| header       | HeaderFooterSettings or false | Optional settings for the header, set to `false` to hide.       |
| footer       | HeaderFooterSettings or false | Optional settings for the footer, set to `false` to hide.       |
| leftPannel   | PannelSettings or false       | Optional settings for the left panel, set to `false` to hide.   |
| rightPannel  | PannelSettings or false       | Optional settings for the right panel, set to `false` to hide.  |
| bottomPannel | PannelSettings or false       | Optional settings for the bottom panel, set to `false` to hide. |
| centerPannel | PannelSettings or false       | Optional settings for the center panel, set to `false` to hide. |
| type         | LayoutTypeEnum                | Optional type of layout to use.                                 |
| themeType    | ThemeLayoutType               | Optional theme type for the layout.                             |

### PannelSettings

| Property  | Type                      | Description                                                    |
| --------- | ------------------------- | -------------------------------------------------------------- |
| children  | ReactNode or ReactNode\[] | Required content of the panel.                                 |
| direction | string                    | Optional orientation of the panel, 'horizontal' or 'vertical'. |
| tabs      | TabsProps                 | Optional properties for tabs within the panel.                 |
| icon      | ReactNode                 | Optional icon for the panel.                                   |
| extra     | ReactNode                 | Optional additional React nodes to be displayed.               |
| hide      | boolean                   | Optional flag to hide the panel.                               |
| minWidth  | number                    | Optional minimum width for the panel.                          |
| minHeight | number                    | Optional minimum height for the panel.                         |
| maxWidth  | number                    | Optional maximum width for the panel.                          |
| maxHeight | number                    | Optional maximum height for the panel.                         |
| style     | React.CSSProperties       | Optional CSS properties for panel styling.                     |
| className | string                    | Optional CSS class name for the panel.                         |
| themeType | ThemeLayoutType           | Optional theme type for the panel.                             |

### HeaderFooterSettings

| Property   | Type                      | Description                                          |
| ---------- | ------------------------- | ---------------------------------------------------- |
| iconConfig | iconDropdownType or false | Optional icon configuration, set to `false` to hide. |
| extra      | ReactNode                 | Optional additional React nodes to be displayed.     |
| flex       | FlexProps                 | Optional Flexbox properties.                         |
| hide       | boolean                   | Optional flag to hide the component.                 |
| render     | Function                  | Optional custom render function for the component.   |
| style      | React.CSSProperties       | Optional CSS properties for component styling.       |
| className  | string                    | Optional CSS class name for the component.           |
| children   | ReactNode                 | Optional content of the component.                   |
| type       | typeEnum or string        | Optional type of component.                          |
| themeType  | ThemeLayoutType           | Optional theme type for the component.               |
