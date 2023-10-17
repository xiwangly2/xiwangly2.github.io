import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Xiwangly\'s Page',
  description: '这是我的一个静态网站',
  theme: defaultTheme({
    locales: {
      '/en-US/': {
        selectLanguageName: 'English',
      },
      '/zh-CN/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),
})
