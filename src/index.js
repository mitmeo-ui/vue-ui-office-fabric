import 'office-ui-fabric-js/dist/css/fabric.min.css';
import 'office-ui-fabric-js/dist/css/fabric.components.min.css';
import 'font-awesome/css/font-awesome.min.css';

import MenuBar from '@/components/MenuBar';
import Button from '@/components/Button';

import './styles.scss';

// Need to require this global variable here, so Webpack can pick it up
const fabric = require('office-ui-fabric-js/dist/js/fabric.min.js');

export default {
  install(Vue) {
    Vue.component(MenuBar.name, MenuBar);
    Vue.component(Button.name, Button);
    Vue.mixin({
      created() {
        // Global helpers
        this.$ui = {
          fabric,
          getIconClass: icon => `fa fa-${icon}`, // Font Awesome, for now
        };
      },
    });
  },
};

