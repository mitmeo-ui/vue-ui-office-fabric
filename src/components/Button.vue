<template>
  <button :class="cssClass" :disabled="disabled">
    <span class="ms-Button-label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import utils from '@/utils';

export default {
  name: 'vue-ui-button',
  props: [
    'type',
    'loading',
    'loading-text',
    'click',
  ],
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
        this.setText(this.computedLoadingText);
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
  computed: {
    computedLoadingText() {
      return this.loadingText || 'Loading...';
    },
  },
};
</script>
