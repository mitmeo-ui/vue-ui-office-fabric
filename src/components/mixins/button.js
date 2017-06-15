import utils from '@/utils';

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
  },
  data() {
    return {
      cssClass: 'ms-Button',
      disabled: false,
    };
  },
  mounted() {
    // First undefined tag is the button text
    this.textSlot = utils.getSlotNodesByTag(this)[0];
    this.defaultText = this.textSlot.text;
    this.setText = (text) => {
      if (this.textSlot.elm) this.textSlot.elm.data = text;
      else this.textSlot.text = text;
    };
    this.checkLoading = (val) => {
      if (val) {
        this.disabled = true;
        this.setText(this.loadingText);
      } else {
        this.disabled = false;
        this.setText(this.defaultText);
      }
    };
    this.checkType = (val) => {
      if (val && val !== 'default') {
        this.cssClass += ` ms-Button--${this.type}`;
      } else {
        this.cssClass = 'ms-Button';
      }
    };
    this.checkLoading(this.loading);
    this.checkType(this.type);
  },
  watch: {
    loading(val) {
      this.checkLoading(val);
    },
    type(val) {
      this.checkType(val);
    },
  },
};
