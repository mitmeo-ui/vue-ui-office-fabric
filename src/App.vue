<template>
  <div id="app">
    <h1>Menu Bar</h1>
    <vui-menubar>
      <vui-menubar-side>
        <vui-menubar-item text="User Profile" :icon="icons[0]" :command="buttonClick">
          <vui-menubar-subitem :icon="icons[1]" text="Reset Password" :command="buttonClick"></vui-menubar-subitem>
          <vui-menubar-subitem :icon="icons[2]" text="Confirm Email" :command="buttonClick"></vui-menubar-subitem>
        </vui-menubar-item>
        <vui-menubar-item :icon="icons[3]" tool-tip="Sign out" :command="buttonClick"></vui-menubar-item>
      </vui-menubar-side>
      <vui-menubar-main :search="menuSearch">
        <vui-menubar-item text="Gift" :command="buttonClick" :icon="icons[4]"></vui-menubar-item>
        <vui-menubar-item text="Icons">
          <vui-menubar-subitem :icon="icons[5]" text="User Profile" :command="buttonClick"></vui-menubar-subitem>
          <vui-menubar-subitem :divider="true"></vui-menubar-subitem>
          <vui-menubar-subitem :icon="icons[6]" text="Schedule" :command="buttonClick"></vui-menubar-subitem>
          <vui-menubar-subitem :icon="icons[7]" text="Stocks" :command="buttonClick"></vui-menubar-subitem>
        </vui-menubar-item>
      </vui-menubar-main>
    </vui-menubar>
    <p>
      <vui-button @click.native="useIcons('fa')">Use Font Awesome</vui-button>
      <vui-button @click.native="useIcons('typcn')">Use Typicons</vui-button>
      <vui-button @click.native="useIcons('mdl')">Use Materialize</vui-button>
    </p>
    <h1>Button</h1>
    <h2>Default</h2>
    <vui-button @click.native="buttonClick">Button</vui-button>
    <h2>Primary</h2>
    <vui-button type="primary" @click.native="buttonClick">Button</vui-button>
    <h2>Disabled</h2>
    <vui-button disabled @click.native="buttonClick">Button</vui-button>
    <h2>Loading</h2>
    <vui-button type="primary" :loading="loading" @click.native="buttonClick">Button</vui-button>
    <h3>Custom loading text</h3>
    <vui-button type="primary" :loading="loading" loading-text="Please wait..." @click.native="buttonClick">Button</vui-button>
    <p>
      <vui-button type="primary" @click.native="toggleLoading">Loading {{loading ? 'OFF' : 'ON'}}</vui-button>
    </p>
  </div>
</template>

<script>
import 'typicons.font/src/font/typicons.css';

const icons = {
  fa: [
    'fa fa-user-o',
    'fa fa-key',
    'fa fa-envelope-o',
    'fa fa-power-off',
    'fa fa-gift',
    'fa fa-user',
    'fa fa-calendar',
    'fa fa-list',
    'fa fa-star',
    'fa fa-circle',
  ],
  typcn: [
    'typcn typcn-user-outline',
    'typcn typcn-key',
    'typcn typcn-mail',
    'typcn typcn-power',
    'typcn typcn-gift',
    'typcn typcn-user',
    'typcn typcn-calendar',
    'typcn typcn-th-list',
    'typcn typcn-star',
    'typcn typcn-social-github-circle',
  ],
  mdl: [
    'md-icon|account_box',
    'md-icon|vpn_key',
    'md-icon|mail_outline',
    'md-icon|power_settings_new',
    'md-icon|card_giftcard',
    'md-icon|account_circle',
    'md-icon|schedule',
    'md-icon|view_list',
    'md-icon|star',
    'md-icon|check_circle',
  ],
};

export default {
  name: 'app',
  data() {
    return {
      loading: true,
      icons: icons.typcn,
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    buttonClick() {
      alert('You have clicked a button');
    },
    menuSearch(term) {
      alert(`You have searched for "${term}"`);
    },
    useIcons(icon) {
      this.icons = icons[icon];
    },
  },
};
</script>

<style>

</style>
