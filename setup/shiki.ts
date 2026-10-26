import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'
import promql from './promql'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    langs: { promql },
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
  }
})
