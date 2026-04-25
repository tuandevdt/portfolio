import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { siteContent } from './content/siteContent'
import { applySeoMetadata } from './utils/seo'

const app = createApp(App)
applySeoMetadata(siteContent.seo)
app.mount('#app')
