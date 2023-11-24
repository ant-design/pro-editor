---
title: FieldTitle
group: Basic
---

# FieldTitle Field Title

## When to use

Configure field icons and field titles for different field types.

## Code Demo

### Field Title List

<code src="./demos/basic.tsx" ></code>

### Configuration Display

<code src="./demos/description.tsx" ></code>

## API

| Parameter     | Description                           | Type                                        | Default |
| :------------ | :------------------------------------ | :------------------------------------------ | :------ |
| type          | Field type                            | Refer to `FieldIcon` field type enumeration | -       |
| isParentArray | Whether the parent is an array        | boolean                                     | -       |
| title         | Field title                           | `React.ReactNode`                           | -       |
| description   | Description to the right of the title | `React.ReactNode`                           | -       |
