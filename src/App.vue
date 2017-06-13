<template>
  <div id="app">
    <h1>Menu Bar</h1>
    <vue-ui-menu-bar :search="menuSearch" :items="menuItems"></vue-ui-menu-bar>
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
const menuClick = function (evt) {
  alert(`You have clicked the "${evt.target.innerText}" item!`);
};

export default {
  name: 'app',
  data() {
    return {
      loading: true,
      menuItems: [
        {
          text: 'Click me!',
          command: menuClick,
          icon: 'star-o',
        },
        {
          text: 'Menu 2',
          subItems: [
            {
              text: 'Sub Menu 1',
              icon: 'bar-chart',
              command: menuClick,
            },
            {
              text: 'Sub Menu 2',
              icon: 'pie-chart',
              command: menuClick,
            },
          ],
        },
        {
          text: 'Right Menu',
          position: 'right',
          icon: 'save',
          subItems: [
            {
              text: 'Sub Menu 1',
              command: menuClick,
            },
            {
              divider: true,
            },
            {
              text: 'Sub Menu 2',
              command: menuClick,
            },
            {
              text: 'Sub Menu 3',
              command: menuClick,
            },
          ],
        },
        {
          text: 'Right Menu 2',
          position: 'right',
          command: menuClick,
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
    menuSearch(term) {
      alert(`You have searched for "${term}"`);
    },
  },
};
</script>

<style>

</style>
