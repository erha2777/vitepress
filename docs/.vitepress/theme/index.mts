// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
// import './custom.css'

// import "element-plus/dist/index.css";
// import elementplus from "element-plus"
import MUI from 'jaweiwang-ui'
import 'jaweiwang-ui/dist/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app.use(elementplus);
    app.use(MUI);

  },
};