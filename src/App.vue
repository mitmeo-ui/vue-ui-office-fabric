<template>
  <div id="app">
    <h1>Menu Bar</h1>
    <vui-menubar>
      <vui-menubar-side>
        <vui-menubar-item text="User Profile" icon="fa fa-user-o" :command="buttonClick">
          <vui-menubar-subitem icon="fa fa-key" text="Reset Password" :command="buttonClick"></vui-menubar-subitem>
          <vui-menubar-subitem icon="fa fa-envelope-o" text="Confirm Email" :command="buttonClick"></vui-menubar-subitem>
        </vui-menubar-item>
        <vui-menubar-item icon="fa fa-power-off" tool-tip="Sign out" :command="buttonClick"></vui-menubar-item>
      </vui-menubar-side>
      <vui-menubar-main :search="menuSearch">
        <vui-menubar-item text="Gift" :command="buttonClick" icon="fa fa-gift"></vui-menubar-item>
        <vui-menubar-item text="Icons">
          <vui-menubar-subitem icon="fa fa-user" text="User Profile" :command="buttonClick"></vui-menubar-subitem>
          <vui-menubar-subitem :divider="true"></vui-menubar-subitem>
          <vui-menubar-subitem icon="fa fa-calendar" text="Schedule" :command="buttonClick"></vui-menubar-subitem>
          <vui-menubar-subitem icon="fa fa-list" text="Stocks" :command="buttonClick"></vui-menubar-subitem>
        </vui-menubar-item>
      </vui-menubar-main>
    </vui-menubar>
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
    buttonClick() {
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
