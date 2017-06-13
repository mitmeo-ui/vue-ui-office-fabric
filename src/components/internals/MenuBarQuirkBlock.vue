<template>
  <!--Why this block is required? Hey M$!-->
  <div class="ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel">
    <a class="ms-CommandButton-button">
      <span class="ms-CommandButton-icon">
        <i class="ms-Icon ms-Icon--More"></i>
      </span>
      <span class="ms-CommandButton-label"></span>
    </a>
    <ul class="ms-ContextualMenu is-opened">
      <li class="ms-ContextualMenu-item">
        <a class="ms-ContextualMenu-link"></a>
        <i class="ms-Icon"></i>
      </li>
    </ul>
  </div>
  <!--End M$-->
</template>

<script>
export default {
  name: 'vue-ui-menu-bar-quirk',
};
</script>
