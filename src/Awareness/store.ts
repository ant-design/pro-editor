// FIXME：这里理论上不应该使用 faker 的，后续需要重构优化掉
import { faker } from '@faker-js/faker';
import { useEffect } from 'react';
import type { Position } from 'react-rnd';
import type { Awareness } from 'y-protocols/awareness';
import type { WebrtcProvider } from 'y-webrtc';
import type { StoreApi } from 'zustand';
import { create } from 'zustand';
import { createContext } from 'zustand-utils';

import { useAwarenessEvent } from './event';

export interface User {
  id: string;
  name: string;
  color: string;
}

export interface AwarenessState {
  user: User;
  cursor: Position;
  active: boolean;
}

interface ProviderStore {
  provider: WebrtcProvider;
  awareness?: Awareness;
  currentUser: string;
  awarenessStates: AwarenessState[];
  followUser?: string;

  setFollowUser: (id: string) => void;
}

export const createStore = (provider: WebrtcProvider) => {
  const useStore = create<ProviderStore>((set) => {
    return {
      provider,
      awareness: provider.awareness,
      currentUser: faker.name.fullName(),
      awarenessStates: [],

      setFollowUser: (followUser) => {
        set({ followUser });
      },
    };
  });
  const { awareness } = useStore.getState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useAwarenessEvent({
    onMouseMove: (p) => {
      awareness.setLocalStateField('cursor', p);
    },
    onBlur: (e) => {
      awareness.setLocalStateField('active', e === 'visible');
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // 先创建一下监听事件
    awareness.on('change', () => {
      const awarenessStates = Array.from(awareness.getStates().values()) as AwarenessState[];

      useStore.setState((state) => ({ ...state, awarenessStates }));
    });

    // 再初始化一轮用户
    awareness.setLocalStateField('user', {
      id: useStore.getState().currentUser,
      name: useStore.getState().currentUser,
      color: faker.color.rgb(),
    });

    awareness.setLocalStateField('active', true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useStore;
};

export const { useStore, Provider, useStoreApi } = createContext<StoreApi<ProviderStore>>();
