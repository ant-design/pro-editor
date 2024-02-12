---
title: EditorLayout
atomId: Layout
group: Basic
---

# EditorLayout

EditorLayout is an editor layout component specifically designed for editor scenarios.

## Code Demo

<code src="./demos/basic.tsx" title="Basic Usage"></code>

<code src="./demos/single.tsx" title="Panel Only" description="You can hide the header and footer by setting `header` and `footer` to `false`"></code>

<code src="./demos/noLeftPannel.tsx" title="Close Panel" description="Of course, you can also set a specific `panel` to false to close its content"></code>

### Change Layout

![layout-types](https://mdn.alipayobjects.com/huamei_re70wt/afts/img/A*-asvT7GkKIwAAAAAAAAAAAAADmuEAQ/original)

<code src="./demos/types.tsx" title="Change Layout" description="You can render different layout structures by declaring different `types`. We divide the layout into 4 types, with the default being the `Bottom` mode, which is sufficient for most editor scenarios on the market."></code>

<code src="./demos/themeType.tsx" title="Layout Theme Type" description="You can specify the ThemeType to switch some simple layout theme styles. You can also configure ThemeType for each part separately, which will take precedence over the global configuration"></code>

> Note: In pure mode, we will disable the spacing between the original panels, the radius of each part, and the background color. At this time, if you do not add color to each area or use some special CSS to distinguish them, it will be difficult to see each part clearly.

<code src="./demos/dingding.tsx" title="Conversation Layout" description="You can easily build a layout similar to a conversation by configuring and styling"></code>

## APIs

### LayoutProps Layout Props

| Property     | Type                          | Description                                             |
| ------------ | ----------------------------- | ------------------------------------------------------- |
| header       | HeaderFooterSettings or false | Optional header settings, set to `false` to hide.       |
| footer       | HeaderFooterSettings or false | Optional footer settings, set to `false` to hide.       |
| leftPannel   | PannelSettings or false       | Optional left panel settings, set to `false` to hide.   |
| rightPannel  | PannelSettings or false       | Optional right panel settings, set to `false` to hide.  |
| bottomPannel | PannelSettings or false       | Optional bottom panel settings, set to `false` to hide. |
| centerPannel | PannelSettings or false       | Optional center panel settings, set to `false` to hide. |
| type         | LayoutTypeEnum                | Optional layout type.                                   |
| themeType    | ThemeLayoutType               | Optional layout theme type.                             |

### PannelSettings Panel Settings

| Property  | Type                       | Description                                                  |
| --------- | -------------------------- | ------------------------------------------------------------ |
| children  | ReactNode or ReactNode \[] | Required content of the panel.                               |
| direction | string                     | Optional direction of the panel, 'horizontal' or 'vertical'. |
| tabs      | TabsProps                  | Tab properties inside the panel.                             |
| icon      | ReactNode                  | Optional icon for the panel.                                 |
| extra     | ReactNode                  | Optional additional React node.                              |
| hide      | boolean                    | Optional flag to hide the panel.                             |
| minWidth  | number                     | Optional minimum width of the panel.                         |
| minHeight | number                     | Optional minimum height of the panel.                        |
| maxWidth  | number                     | Optional maximum width of the panel.                         |
| maxHeight | number                     | Optional maximum height of the panel.                        |
| style     | React.CSSProperties        | Optional CSS properties for the panel style.                 |
| className | string                     | Optional CSS class for the panel.                            |
| themeType | ThemeLayoutType            | Optional theme type for the panel.                           |

### HeaderFooterSettings Header and Footer Area Settings

| Property   | Type                      | Description                                           |
| ---------- | ------------------------- | ----------------------------------------------------- |
| iconConfig | iconDropdownType or false | Optional icon configuration, set to `false` to hide.  |
| extra      | ReactNode                 | Optional additional React node.                       |
| flex       | FlexProps                 | Optional Flexbox properties.                          |
| hide       | boolean                   | Optional flag to hide the component.                  |
| render     | Function                  | Optional custom rendering function for the component. |
| style      | React.CSSProperties       | Optional CSS properties for the component style.      |
| className  | string                    | Optional CSS class for the component.                 |
| children   | ReactNode                 | Optional content for the component.                   |
| type       | typeEnum or string        | Optional type for the component.                      |
| themeType  | ThemeLayoutType           | Optional theme type for the component.                |
