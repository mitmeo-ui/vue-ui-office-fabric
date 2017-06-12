<template>
  <div class="ms-CommandBar ms-CommandBar--navBar">
    <div class="ms-CommandBar-sideCommands" v-if="rightItems.length > 0">
      <div class="ms-CommandButton ms-CommandButton--pivot" v-for="item in rightItems">
        <button class="ms-CommandButton-button">
          <!--<span class="ms-CommandButton-icon ms-fontColor-themePrimary">
                        <i class="ms-Icon ms-Icon--Settings"></i>
                      </span>-->
          <span class="ms-CommandButton-label">{{item.text}}</span>
          <span class="ms-CommandButton-dropdownIcon" v-if="hasSubMenu(item)">
            <i class="ms-Icon ms-Icon--ChevronDown"></i>
          </span>
        </button>
        <ul :class="`ms-ContextualMenu ${hasIcons(item.subItems) ? 'ms-ContextualMenu--hasIcons' : ''}`" v-if="hasSubMenu(item)">
          <li :class="`ms-ContextualMenu-item ${sub.divider ? 'ms-ContextualMenu-item--divider' : ''}`" v-for="sub in item.subItems">
            <template v-if="!sub.divider">
              <a class="ms-ContextualMenu-link" tabindex="1">{{sub.text}}</a>
              <!--<i class="ms-Icon ms-Icon--Folder"></i>-->
            </template>
          </li>
          <!--<li class="ms-ContextualMenu-item ms-ContextualMenu-item--divider"></li>
                      <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Plain Text Document</a>
                        <i class="ms-Icon ms-Icon--Document"></i>
                      </li>
                      <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">A Coffee</a>
                        <i class="ms-Icon ms-Icon--Coffee"></i>
                      </li>
                      <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Picture</a>
                        <i class="ms-Icon ms-Icon--Picture"></i>
                      </li>
                      <li class="ms-ContextualMenu-item">
                        <a class="ms-ContextualMenu-link" tabindex="1">Money</a>
                        <i class="ms-Icon ms-Icon--Money"></i>
                      </li>-->
        </ul>
      </div>
      <div class="ms-CommandButton ms-CommandButton--noLabel">
        <button class="ms-CommandButton-button">
          <span class="ms-CommandButton-icon ms-fontColor-themePrimary">
            <i class="ms-Icon ms-Icon--Info"></i>
          </span>
          <span class="ms-CommandButton-label"></span>
        </button>
      </div>
    </div>
    <div class="ms-CommandBar-mainArea">
      <div class="ms-SearchBox ms-SearchBox--commandBar" v-if="search">
        <input class="ms-SearchBox-field" type="text" value="">
        <label class="ms-SearchBox-label">
          <i class="ms-SearchBox-icon ms-Icon ms-Icon--Search"></i>
          <span class="ms-SearchBox-text">Search photos</span>
        </label>
        <div class="ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel">
          <button class="ms-CommandButton-button">
            <span class="ms-CommandButton-icon">
              <i class="ms-Icon ms-Icon--Cancel"></i>
            </span>
            <span class="ms-CommandButton-label"></span>
          </button>
        </div>
        <div class="ms-CommandButton ms-SearchBox-exit ms-CommandButton--noLabel">
          <button class="ms-CommandButton-button">
            <span class="ms-CommandButton-icon">
              <i class="ms-Icon ms-Icon--ChromeBack"></i>
            </span>
            <span class="ms-CommandButton-label"></span>
          </button>
        </div>
        <div class="ms-CommandButton ms-SearchBox-filter ms-CommandButton--noLabel">
          <button class="ms-CommandButton-button">
            <span class="ms-CommandButton-icon">
              <i class="ms-Icon ms-Icon--Filter"></i>
            </span>
            <span class="ms-CommandButton-label"></span>
          </button>
        </div>
      </div>
      <div class="ms-CommandButton ms-CommandButton--pivot is-active">
        <button class="ms-CommandButton-button">
          <span class="ms-CommandButton-label">All Photos</span>
          <span class="ms-CommandButton-dropdownIcon">
            <i class="ms-Icon ms-Icon--ChevronDown"></i>
          </span>
        </button>
        <ul class="ms-ContextualMenu is-opened ms-ContextualMenu--hasIcons">
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Folder</a>
            <i class="ms-Icon ms-Icon--Folder"></i>
          </li>
          <li class="ms-ContextualMenu-item ms-ContextualMenu-item--divider"></li>
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Plain Text Document</a>
            <i class="ms-Icon ms-Icon--Document"></i>
          </li>
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Coffee</a>
            <i class="ms-Icon ms-Icon--Coffee"></i>
          </li>
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Picture</a>
            <i class="ms-Icon ms-Icon--Picture"></i>
          </li>
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Money</a>
            <i class="ms-Icon ms-Icon--Money"></i>
          </li>
        </ul>
      </div>
      <div class="ms-CommandButton ms-CommandButton--pivot">
        <a class="ms-CommandButton-button">
          <span class="ms-CommandButton-label">Albums</span>
        </a>
      </div>
      <div class="ms-CommandButton ms-CommandButton--pivot">
        <a class="ms-CommandButton-button">
          <span class="ms-CommandButton-label">Tags</span>
        </a>
      </div>
      <div class="ms-CommandButton ms-CommandButton--pivot">
        <a class="ms-CommandButton-button">
          <span class="ms-CommandButton-label">Places</span>
        </a>
      </div>
      <div class="ms-CommandButton ms-CommandButton--pivot">
        <a class="ms-CommandButton-button">
          <span class="ms-CommandButton-label">People</span>
        </a>
      </div>
      <div class="ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel">
        <button class="ms-CommandButton-button">
          <span class="ms-CommandButton-icon">
            <i class="ms-Icon ms-Icon--More"></i>
          </span>
          <span class="ms-CommandButton-label"></span>
        </button>
        <ul class="ms-ContextualMenu is-opened">
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Folder</a>
            <i class="ms-Icon ms-Icon--Folder"></i>
          </li>
          <li class="ms-ContextualMenu-item ms-ContextualMenu-item--divider"></li>
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Plain Text Document</a>
            <i class="ms-Icon ms-Icon--Document"></i>
          </li>
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">A Coffee</a>
            <i class="ms-Icon ms-Icon--Coffee"></i>
          </li>
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Picture</a>
            <i class="ms-Icon ms-Icon--Picture"></i>
          </li>
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link" tabindex="1">Money</a>
            <i class="ms-Icon ms-Icon--Money"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router';
import _ from 'lodash';
import { fabric } from '@/';

export default {
  name: 'vue-ui-menu-bar',
  data() {
    return {

    };
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
    search: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: null,
    },
    router: {
      type: val => val instanceof Router,
      default: null,
    },
  },
  mounted() {
    this.instance$ = new fabric['CommandBar'](this.$el);
  },
  computed: {
    leftItems() {
      return _.filter(this.items, item => !(item.position) || item.position === 'left');
    },
    rightItems() {
      return _.filter(this.items, item => item.position === 'right');
    },
  },
  methods: {
    hasIcons(items) {
      return _.find(items, item => item.icon);
    },
    hasSubMenu(item) {
      return item.subItems && item.subItems.length > 0;
    },
  },
};
</script>

<style>

</style>
