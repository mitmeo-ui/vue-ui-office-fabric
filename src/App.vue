<template>
  <div id="app">
    <h1>Button</h1>
    <h2>Default</h2>
    <vue-ui-button @click.native="click">Button</vue-ui-button>
    <h2>Primary</h2>
    <vue-ui-button type="primary" @click.native="click">Button</vue-ui-button>
    <h2>Disabled</h2>
    <vue-ui-button disabled @click.native="click">Button</vue-ui-button>
    <h2>Loading</h2>
    <vue-ui-button type="primary" :loading="loading" @click.native="click">Button</vue-ui-button>
    <h3>Custom loading text</h3>
    <vue-ui-button type="primary" :loading="loading" loading-text="Please wait..." @click.native="click">Button</vue-ui-button>
    <p>
      <vue-ui-button type="primary" @click.native="toggleLoading">Loading {{loading ? 'OFF' : 'ON'}}</vue-ui-button>
    </p>
  </div>
</template>

<script>
import Vue from 'vue';
import VueUI from './';

Vue.use(VueUI);

export default {
  name: 'app',
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    click() {
      alert('You have clicked a button');
    },
  },
};
</script>

<style>

</style>
