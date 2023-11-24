---
title: DataFill
group: Panel
---

## When To Use

The data filling dictionary is used to quickly obtain mock data.

## Code Example

### Basic Usage

<code src="./demos/basic" ></code>

## API

| Parameter | Description    | Type                                | Default |
| :-------- | :------------- | :---------------------------------- | :------ |
| onClick   | Click callback | `{payload: FilledPayload } => void` | -       |

### FilledPayload

| Parameter | Description                                                            | Type           | Default |
| :-------- | :--------------------------------------------------------------------- | :------------- | :------ |
| key       | Key of the selected data type, see KeyMap for the key value            | `string`       | -       |
| filler    | Filter function, returns the mock value of the corresponding data type | `() => string` | -       |

### KeyMap

```javascript
const FILL_KEY_MAP = {
  // Common
  common: [
    // Name
    'name',
    // Website
    'website',
    // Email
    'mail',
  ] as const,
  // Identifier
  identifier: [
    // Order number
    'order',
    // Phone number
    'phone',
    // Landline
    'landline',
    // ID card
    'idCard',
    // Bank card
    'bankCard',
  ] as const,
  // Data
  data: ['percent', 'money'] as const,
  /**
   * Time
   */
  dateTime: ['date', 'dateTime', 'week', 'month', 'time', 'timestamp'] as const,
  // Address
  address: [
    // Country
    'country',
    // Province
    'province',
    // City
    'city',
  ] as const,
};
```
