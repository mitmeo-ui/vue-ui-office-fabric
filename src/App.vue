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
      <vui-menubar-main :search="menuSearch" :icon="icons.search">
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
      <vui-button :command="() => {useIcons('fabric');}">Use Fabric</vui-button>
      <vui-button :command="() => {useIcons('fa');}">Use Font Awesome</vui-button>
      <vui-button :command="() => {useIcons('typcn');}">Use Typicons</vui-button>
      <vui-button :command="() => {useIcons('mdl');}">Use Materialize</vui-button>
    </p>
    <h1>Button</h1>
    <h2>Default</h2>
    <vui-button :command="buttonClick">Button</vui-button>
    <h2>Primary</h2>
    <vui-button type="primary" :command="buttonClick">Button</vui-button>
    <h2>Disabled</h2>
    <vui-button disabled :command="buttonClick">Button</vui-button>
    <h2>Loading</h2>
    <vui-button type="primary" :loading="buttonLoading" :command="buttonClick">Button</vui-button>
    <h3>Custom loading text</h3>
    <vui-button type="primary" :loading="buttonLoading" loading-text="Please wait..." :command="buttonClick">Button</vui-button>
    <p>
      <vui-button type="primary" :command="toggleLoading">Loading {{buttonLoading ? 'OFF' : 'ON'}}</vui-button>
    </p>

    <h1>CheckBox</h1>
    <h2>Default</h2>
    <vui-checkbox>Default Checkbox</vui-checkbox>
    <h2>Checked Listener</h2>
    <vui-checkbox :command="buttonClick">Event Listener Attached</vui-checkbox>
    <h2>Disabled</h2>
    <vui-checkbox disabled>Disabled Checkbox</vui-checkbox>
  </div>
</template>

<script>
import icons from '@/icons';

export default {
  name: 'app',
  data() {
    return {
      buttonLoading: true,
      icons: [],
    };
  },
  mounted() {
    this.useIcons('fabric');
  },
  methods: {
    toggleLoading() {
      this.buttonLoading = !this.buttonLoading;
    },
    buttonClick(event) {
      alert(`You have clicked ${event.target.innerText} button`);
    },
    menuSearch(term) {
      alert(`You have searched for "${term}"`);
    },
    useIcons(icon) {
      this.icons = icons[icon];
      this.icons.search = icons.search[icon];
    },
  },
};
</script>

<style>

</style>
