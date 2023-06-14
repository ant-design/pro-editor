import { JSONSchema } from '@/ComponentAsset';
import { getDefaultValueFromSchema } from '@c2d2c/utils';
import { useMemoizedFn } from 'ahooks';
import isEqual from 'fast-deep-equal';
import { useControls, useStoreContext } from 'leva';
import { DataInput } from 'leva/src/types';
import merge from 'lodash.merge';
import { ReactNode, memo, useEffect, useMemo } from 'react';

import { SchemaItem, toLevaSchema } from './utils/schema';

export interface SchemaProps<T> {
  schema: JSONSchema<T>;
  defaultValue?: T;
  value?: T;
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
