import 'office-ui-fabric-js/dist/css/fabric.min.css';
import 'office-ui-fabric-js/dist/css/fabric.components.min.css';

import MenuBar from '@/components/MenuBar';
import MenuBarMain from '@/components/MenuBarMain';
import MenuBarSide from '@/components/MenuBarSide';
import MenuBarItem from '@/components/MenuBarItem';
import MenuBarSubItem from '@/components/MenuBarSubItem';
import Button from '@/components/Button';

import '@/styles.scss';

// Need to require this global variable here, so Webpack can pick it up
const fabric = require('office-ui-fabric-js/dist/js/fabric.min.js');

export default {
  install(vue) {
    vue.component(MenuBar.name, MenuBar);
    vue.component(MenuBarMain.name, MenuBarMain);
    vue.component(MenuBarSide.name, MenuBarSide);
    vue.component(MenuBarItem.name, MenuBarItem);
    vue.component(MenuBarSubItem.name, MenuBarSubItem);
    vue.component(Button.name, Button);
  },
};

export { fabric };

