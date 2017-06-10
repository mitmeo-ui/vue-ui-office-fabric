<template>
  <button :class="cssClass" :disabled="disabled">
    <span class="ms-Button-label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import ButtonMixins from './mixins/button';

export default {
  name: 'vue-ui-button',
  mixins: [ButtonMixins],
};
</script>
