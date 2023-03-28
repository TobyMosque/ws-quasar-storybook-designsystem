import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-design-system'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
