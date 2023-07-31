import { JSONSchema } from '@/types/schema';
/**
 * 从schema 获取预设值
 * @param schema
 */
export const getDefaultValueFromSchema = (schema: JSONSchema) => {
  if (schema.type === 'object') {
    if (!schema.properties) return;
    return Object.fromEntries(
      Object.entries(schema.properties).map(([key, value]) => [key, value.default]),
    );
  }
  if (schema.type === 'null') return null;
  return schema.default;
};
