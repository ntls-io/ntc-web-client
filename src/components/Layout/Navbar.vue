<template>
  <nav class="main-header navbar navbar-expand navbar-light border-0">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link"
          data-widget="pushmenu"
          href="#"
          role="button"
          @click="toggle()"
        >
          <b-icon icon="layout-sidebar"></b-icon
        ></a>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <b-nav-item-dropdown text="Full Name" toggle-class="text-dark ">
        <b-dropdown-item>
          Profile
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Logout
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>
  </nav>
</template>

<script>
import pushMenu from "@/mixins/PushMenu";
export default {
  mixins: [pushMenu]
};
</script>
