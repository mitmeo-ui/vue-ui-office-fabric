import 'office-ui-fabric-js/dist/css/fabric.min.css';
import 'office-ui-fabric-js/dist/css/fabric.components.min.css';

import MenuBar from '@/components/MenuBar';
import Button from '@/components/Button';

// Need to require this global variable here, so Webpack can pick it up
const fabric = require('office-ui-fabric-js/dist/js/fabric.min.js');

export default {
  install(Vue) {
    Vue.component(MenuBar.name, MenuBar);
    Vue.component(Button.name, Button);
  },
};

export { fabric };

