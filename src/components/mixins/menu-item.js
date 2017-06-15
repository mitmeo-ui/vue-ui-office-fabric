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
  computed: {
    iconClass() {
      return this.icon ? this.icon.split('|')[0].trim() : null;
    },
    iconText() {
      if (!this.icon) return null;
      const segs = this.icon.split('|');
      return (segs.length === 2) ? segs[1].trim() : null;
    },
  },
};
