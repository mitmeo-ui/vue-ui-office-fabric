<template>
  <div id="app">
    <h1>Menu Bar</h1>
    <vui-menubar>
      <vui-menubar-side :items="sideItems">
        <vui-menubar-item icon="home"></vui-menubar-item>
      </vui-menubar-side>
      <vui-menubar-main :search="menuSearch" :items="mainItems">
        <vui-menubar-item text="Before"></vui-menubar-item>
        <template slot="after">
          <vui-menubar-item text="After">
            <vui-menubar-subitem :item="sideItems[1]"></vui-menubar-subitem>
          </vui-menubar-item>
        </template>
      </vui-menubar-main>
    </vui-menubar>
    <h1>Button</h1>
    <h2>Default</h2>
    <vui-button @click.native="click">Button</vui-button>
    <h2>Primary</h2>
    <vui-button type="primary" @click.native="click">Button</vui-button>
    <h2>Disabled</h2>
    <vui-button disabled @click.native="click">Button</vui-button>
    <h2>Loading</h2>
    <vui-button type="primary" :loading="loading" @click.native="click">Button</vui-button>
    <h3>Custom loading text</h3>
    <vui-button type="primary" :loading="loading" loading-text="Please wait..." @click.native="click">Button</vui-button>
    <p>
      <vui-button type="primary" @click.native="toggleLoading">Loading {{loading ? 'OFF' : 'ON'}}</vui-button>
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
      mainItems: [
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
      ],
      sideItems: [
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
          icon: 'youtube',
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
