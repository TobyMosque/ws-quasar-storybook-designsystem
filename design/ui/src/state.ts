import { Ref, InjectionKey, inject } from 'vue'

export interface DsState {
  standout: Ref<boolean | string>,
  filled: Ref<boolean>,
  dense: Ref<boolean>,
}

export const dsStateKey: InjectionKey<DsState> = Symbol('ds-ext-state-key')
export function useDsState () {
  const dsState = inject(dsStateKey)
  if (!dsState) {
    throw 'ds state is not injected'
  }
  return dsState
}