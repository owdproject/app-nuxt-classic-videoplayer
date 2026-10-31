import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-paper',
  apps: ['@owdproject/nuxt-app-classic-videoplayer'],
  modules: ['@owdproject/nuxt-module-fs'],
  systemBar: { enabled: true, startButton: true },
  about: {
    title: 'Video Player (playground)',
    subtitle: 'app-classic-videoplayer · theme-paper',
    href: 'https://github.com/owdproject/nuxt-app-classic-videoplayer',
    versionText: 'Nuxt Desktop',
    icons: [
      {
        title: 'Open Web Desktop',
        name: 'mdi:hexagon-multiple-outline',
        size: 24,
      },
      {
        title: 'Nuxt.js',
        name: 'simple-icons:nuxt',
        size: 25,
        style: 'margin-top: -1px',
      },
    ],
  },
})
