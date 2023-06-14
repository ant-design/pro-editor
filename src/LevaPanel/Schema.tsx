import { JSONSchema } from '@/ComponentAsset';
import { getDefaultValueFromSchema } from '@c2d2c/utils';
import { useMemoizedFn } from 'ahooks';
import isEqual from 'fast-deep-equal';
import { useControls, useStoreContext } from 'leva';
import { DataInput } from 'leva/src/types';
import merge from 'lodash.merge';
import { ReactNode, memo, useEffect, useMemo } from 'react';

import { SchemaItem, toLevaSchema } from './utils/schema';

/**
 * 用于生成表单的 schema 配置项
 * @template T - 表单数据类型
 */
export interface SchemaProps<T> {
  /**
   * JSON Schema 配置项
   */
  schema: JSONSchema<T>;
  /**
   * 表单默认值
   */
  defaultValue?: T;
  /**
   * 表单当前值
   */
  value?: T;
  /**
   * 表单值变化的回调函数
   * @param changedValue - 变化的部分值
   * @param fullValue - 完整的表单值
   */
  onChange?: (changedValue: Partial<T>, fullValue: T) => void;
}

const Schema: <T>(props: SchemaProps<T>) => ReactNode = memo(
  ({ value: outConfig, onChange, schema }) => {
    const store = useStoreContext();

    const getValue = useMemoizedFn(() => {
      const data = store.getData();

      return Object.fromEntries(
        Object.values(data).map((item) => [item.key, (item as DataInput).value]),
      );
    });

    const levaSchema = useMemo(() => {
      return toLevaSchema(schema, (item, key) => {
        const config = {
          onChange: (value, path, context) => {
            if (context.initial || !context.fromPanel) return;

            const full = getValue();
            onChange?.({ [context.key]: value } as any, full as any);
          },
        } as SchemaItem;
        if (outConfig && outConfig[key]) {
          config['value'] = outConfig[key];
        }
        return config;
      });
    }, [schema]);

    useEffect(() => {
      const innerValue = getValue();
      if (isEqual(innerValue, outConfig)) return;

      const config = merge({}, getDefaultValueFromSchema(schema), outConfig);

      store.set(config, false);
    }, [outConfig]);

    useControls(levaSchema, { store });

    return null;
  },
);

export default Schema;
