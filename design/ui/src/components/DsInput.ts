import { computed, defineComponent, h } from 'vue'
import { QInput, QInputProps, QInputSlots, GlobalComponentConstructor } from 'quasar'
import { useDsState } from '../state';

declare module "@vue/runtime-core" {
  interface GlobalComponents {
    DsInput: GlobalComponentConstructor<QInputProps, QInputSlots>;
  }
}

export default defineComponent<QInputProps>({
  name: 'DsInput',
  props: {
    standout: {
      type: [String, Boolean],
      default: undefined
    },
    filled: {
      type: Boolean,
      default: undefined
    },
    dense: {
      type: Boolean,
      default: undefined
    },
  } as never,
  setup (props: any, { attrs, slots }: any) {
    const dsState = useDsState()
    const _props = computed(() => ({ ...props, ...attrs }))
    const _standout = computed(() => _props.value.standout === undefined ? (dsState.standout.value || false) : _props.value.standout)
    const _filled = computed(() => _props.value.filled === undefined ? dsState.filled.value : _props.value.filled)
    const _dense = computed(() => _props.value.dense === undefined ? dsState.dense.value : _props.value.dense)
    return () => {
      return h(QInput, {
        ..._props.value,
        standout: _standout.value,
        filled: _filled.value,
        dense: _dense.value,
        class: 'DsInput'
      }, slots)
    }
  }
})
