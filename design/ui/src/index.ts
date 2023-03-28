import DsInput from './components/DsInput'
import { Plugin, reactive, toRefs } from 'vue'
import { dsStateKey, useDsState } from './state'

const version = '__UI_VERSION__'

const install: Plugin['install']  = function (app) {
  const dsState = toRefs(reactive({
    standout: 'bg-red-8 text-white',
    filled: false,
    dense: true
  }))
  app.provide(dsStateKey, dsState)
  app.component(DsInput.name, DsInput)
}

export {
  version,
  DsInput,
  dsStateKey,
  useDsState,
  install
}
