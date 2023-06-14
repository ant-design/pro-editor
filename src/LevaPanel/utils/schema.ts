import { JSONSchema } from '@/ComponentAsset';
import { LevaInputs, Schema } from 'leva/src/types';

export type SchemaItem = Schema[keyof Schema];

const getOptions = (schemaItem: JSONSchema) => {
  if (schemaItem.enumOptions) {
    return Object.fromEntries(schemaItem.enumOptions.map((i) => [i.label, i.value]));
  } else if (schemaItem.enum) {
    return Object.fromEntries(
      schemaItem.enum.map((i, index) => {
        const name = schemaItem.enumNames?.[index] || i;
        return [name, i];
      }),
    );
  }
};

const getRenderType = (schemaItem: JSONSchema): LevaInputs => {
  switch (schemaItem.type) {
    case 'boolean':
      return LevaInputs.BOOLEAN;
    case 'number':
      return LevaInputs.NUMBER;
    case 'string':
      if (!!getOptions(schemaItem)) return LevaInputs.SELECT;
      return LevaInputs.STRING;
  }
};

export const toLevaSchema = (
  schema: JSONSchema,
  visitItem?: (item: JSONSchema, key: string) => Partial<SchemaItem>,
) =>
  Object.fromEntries(
    Object.entries(schema.properties).map(([key, schemaItem]) => {
      const after = visitItem?.(schemaItem, key) || {};

      const schema: SchemaItem = {
        type: getRenderType(schemaItem),
        label: schemaItem.title,
        value: schemaItem.default,
        options: getOptions(schemaItem),
        ...(after as object),
      };

      return [key, schema];
    }),
  );
