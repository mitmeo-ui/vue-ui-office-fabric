export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: 'Loading...',
    },
    command: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      disabled: false,
    };
  },
};
