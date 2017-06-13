import 'office-ui-fabric-js/dist/css/fabric.min.css';
import 'office-ui-fabric-js/dist/css/fabric.components.min.css';
import 'font-awesome/css/font-awesome.min.css';

import MenuBar from '@/components/MenuBar';
import MenuBarMain from '@/components/MenuBarMain';
import MenuBarSide from '@/components/MenuBarSide';
import MenuBarItem from '@/components/MenuBarItem';
import MenuBarSubItem from '@/components/MenuBarSubItem';
import Button from '@/components/Button';

import './styles.scss';

// Need to require this global variable here, so Webpack can pick it up
const fabric = require('office-ui-fabric-js/dist/js/fabric.min.js');

export default {
  install(Vue) {
    Vue.component(MenuBar.name, MenuBar);
    Vue.component(MenuBarMain.name, MenuBarMain);
    Vue.component(MenuBarSide.name, MenuBarSide);
    Vue.component(MenuBarItem.name, MenuBarItem);
    Vue.component(MenuBarSubItem.name, MenuBarSubItem);
    Vue.component(Button.name, Button);
    // Global helpers
    Vue.mixin({
      created() {
        this.$ui = {
          fabric,
          getIconClass: icon => `fa fa-${icon}`, // Font Awesome, for now
        };
      },
    });
  },
};

