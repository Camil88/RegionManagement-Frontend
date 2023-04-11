import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
   theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.purple.accent3,
        secondary: colors.indigo.accent2,
        success: colors.teal.accent4,
        warning: colors.pink.accent3
      },
    },
  }
});
