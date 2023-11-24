---
title: Why ProEditor?
group: Quick Start
---

# Why ProEditor?

In the mature year of 2023, why are we launching ProEditor?

## 🤔 Preface: Are the current frontend component libraries no longer active?

In the current state where antd and ProComponents are so mature, the efficiency of frontend development is ten or even a hundred times faster than before, and the user experience has also been greatly improved. Does this mean that there is nothing left to do in the current component libraries?

If we carefully analyze the components in these libraries, they mostly focus on content display and lightweight editing, with few components involving relatively complex editing. A typical example is file operations in an operating system, involving multiple input modalities (keyboard, mouse) and multiple interaction methods (box selection, right-click menu, shortcuts, etc.).

We have discussed why such components are not included in antd and ProComponents, and the conclusion is: "It's relatively niche, costly, and not suitable for inclusion after weighing the options." Indeed, "editing" in the frontend is a relatively niche area with generally higher development costs. If you don't encounter it, it's fine, but once you do, there's no escaping a massive amount of code development. Most designers have not delved deeply into the "editing" scenario, and the components they create often do not provide an ideal user experience.

### 🌰 Let's discuss a complex "editing" component with an example

An overview often lacks a tangible feel, so let's discuss a complex "editing" component with an example. For instance, if you want to implement a "sortable list" component like ColumnList, it involves the following complexities:

1. **Basic add, delete, and state management**: It needs to support basic item addition and deletion, handle user click events to add or delete list items, update list data, etc., which is much more complex than displaying a list;
2. **Drag-and-drop sorting logic**: Simple drag-and-drop sorting requires handling user drag events, calculating the drag position, updating the list order, and handling the state of the sorted data, all of which require complex logic and code implementation that can overwhelm developers;
3. **Drag-and-drop interaction indicators**: When a user drags a list item, visual indicators are often needed, such as highlighting the drag position or displaying an overlay during the drag-and-drop process. These indicators also require additional code implementation; otherwise, the user's drag-and-drop experience will be poor. You may handle 1 and 2, but this one could be a stumbling block;
4. **Controlled and uncontrolled modes**: As a component, it is ideal to support both controlled and uncontrolled modes. In addition to 1, 2, and 3, you also need to consider how to simultaneously support controlled and uncontrolled modes. It's enough to make your head spin, isn't it?
5. **Component extensibility**: As a generic component, it definitely needs corresponding custom solutions to provide feasibility for integrating various business scenarios. The significant difference between editing components and display components lies in the need for not only display extensibility but also editing capability extensibility (atomic data editing).

### More complex "user input"

In addition to the component level, there are many atomic operational capabilities that the current frontend has not systematically addressed. For example, shortcuts, switching focus with arrow keys, simultaneous keyboard and mouse selection (shift for multiple selection, cmd for copy), undo and redo, mouse box selection, etc.

The user interaction inputs mentioned above are fundamental in "operating systems" and most productivity tools (document suites, code editors, Sketch, PS), but in the "one-size-fits-all" Web, they are considered "luxury" capabilities.

## 🕹 "Editing" in the "antd" domain

We hope that ProEditor will become a foundational library similar to antd in the "editing" domain, allowing frontend developers to quickly and easily implement complex interactive components with excellent default user experience. This is also the reason why this component library is called "ProEditor."

To achieve the above goals, we have established the following principles:

- **Natural editing**: Support the most natural user interactions, including but not limited to mouse multi-selection, deselection, and shortcuts;
- **Flexible and open**: All capabilities support atomic output, including but not limited to components, hooks, utility functions, etc.;
- **Default usability**: Go further on the basis of antd's basic components to achieve default usability in terms of user interaction.

## 💡 Usage recommendations

### When should you not use ProEditor

If your scenario is:

1. **Official website homepage, documentation page**: These scenarios generally do not involve any heavy user interaction operations, so ProEditor is not suitable;
2. **Standard CRUD scenarios in the middle and back office**: For these scenarios, consider using [antd](http://ant.design/) and [ProComponents](https://procomponents.ant.design/) directly;
3. **The technology stack is not React**: For these scenarios, consider the relevant components in your technology stack. ProEditor is only focused on the React ecosystem.

### When can you use ProEditor

1. **Scenarios involving many complex editing operations**: For example, various canvas and editor scenarios, you can use some atomic components in ProEditor (e.g., DraggablePanel) to improve your development efficiency;
2. **Component visual editing scenarios**: For example, if you need a component visual editor similar to [Kitchen Smart Table](https://www.yuque.com/kitchen/changelog/3.1.0), you can try using the component assembly paradigm provided by ProEditor to implement it.
