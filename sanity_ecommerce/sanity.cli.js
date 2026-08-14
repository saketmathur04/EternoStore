import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kcnba8ic',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  deployment: { 
    autoUpdates: true,
    appId: 'qtl1wun15xkaotkts0cj0x3n'
  },
})
