/**
 * 字段类型
 */
export enum APIFieldType {
  integer = 'integer',
  number = 'number',
  bool = 'bool',
  string = 'string',
  integerArray = 'integerArray',
  numberArray = 'numberArray',
  stringArray = 'stringArray',
  boolArray = 'boolArray',
  // 系统赋值字段中的类型
  any = 'any',
  anyArray = 'anyArray',
  object = 'object',
  objectArray = 'objectArray',
  // 仅在树中出现
  array = 'array',
}
