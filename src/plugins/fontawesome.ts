import { config, dom, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'

config.autoAddCss = false

library.add(fab)
library.add(fal)
library.add(far)
library.add(fas)

export {
  dom,
}
