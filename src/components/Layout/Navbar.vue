<template>
  <nav class="main-header navbar navbar-expand navbar-light border-0">
    <!-- Left navbar links -->
    <b-nav class="navbar-nav">
      <b-nav-item>
        <b-link
          class="text-dark"
          data-widget="pushmenu"
          href="#"
          role="button"
          @click="toggle()"
        >
          <b-icon icon="layout-sidebar"></b-icon
        ></b-link>
      </b-nav-item>
    </b-nav>

    <b-nav class="navbar-nav ml-auto">
      <b-nav-item-dropdown text="Full Name" toggle-class="text-dark ">
        <b-dropdown-item to="/account">
          Profile
        </b-dropdown-item>
        <b-dropdown-item to="/">
          Logout
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </nav>
</template>

<script>
import pushMenu from "@/mixins/PushMenu";
export default {
  mixins: [pushMenu]
};
</script>
