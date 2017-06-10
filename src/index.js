import 'office-ui-fabric-js/dist/js/fabric';
import 'office-ui-fabric-js/dist/css/fabric.min.css';
import 'office-ui-fabric-js/dist/css/fabric.components.min.css';

import MenuBar from '@/components/MenuBar';
import Button from '@/components/Button';

export default {
  install(Vue) {
    Vue.component(MenuBar.name, MenuBar);
    Vue.component(Button.name, Button);
  },
};
