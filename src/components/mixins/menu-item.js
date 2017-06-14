export default {
  props: {
    text: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    command: {
      type: Function,
      default: null,
    },
    toolTip: {
      type: String,
      default: null,
    },
    divider: {
      type: Boolean,
      default: false,
    },
  },
};
