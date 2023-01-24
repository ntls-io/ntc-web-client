<template>
  <b-navbar class="main-header bg-white border-0">
    <b-nav class="navbar-nav" pills>
      <b-nav-item @click="toggle()">
        <b-icon icon="layout-sidebar-inset"></b-icon>
      </b-nav-item>
    </b-nav>
  </b-navbar>
</template>

<script>
import pushMenu from "@/mixins/PushMenu";
export default {
  mixins: [pushMenu]
};
</script>
