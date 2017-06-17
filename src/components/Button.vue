<template>
  <button :class="cssClass" :disabled="disabled || loading" @click="command ? command($event) : null">
    <span class="ms-Button-label">
      <slot v-if="!loading"></slot>
      <template v-if="loading">{{loadingText}}</template>
    </span>
  </button>
</template>

<script>
import ButtonMixins from './mixins/button';

export default {
  name: 'vui-button',
  mixins: [
    ButtonMixins,
  ],
  computed: {
    cssClass() {
      return `ms-Button ms-Button--${this.type}`;
    },
  },
};
</script>
