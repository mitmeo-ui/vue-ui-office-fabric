<template>
  <div id="app">
    <h1>Menu Bar</h1>
    <vue-ui-menu-bar :search="true" :items="menuItems"></vue-ui-menu-bar>
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
export default {
  name: 'app',
  data() {
    return {
      loading: true,
      menuItems: [
        {
          text: 'Menu 1',
        },
        {
          text: 'Menu 2',
          subItems: [
            {
              text: 'Sub Menu 1',
            },
            {
              text: 'Sub Menu 2',
            },
          ],
        },
        {
          text: 'Right Menu',
          position: 'right',
          subItems: [
            {
              text: 'Sub Menu 1',
              icon: 'vue-ui-icon-home',
            },
            {
              divider: true,
            },
            {
              text: 'Sub Menu 2',
            },
            {
              text: 'Sub Menu 3',
            },
          ],
        },
        {
          text: 'Right Menu 2',
          position: 'right',
        },
      ],
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
