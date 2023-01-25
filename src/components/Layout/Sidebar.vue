<template>
  <aside class="main-sidebar sidebar-light-dark border-right">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      LOGO
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <b-nav pills class="nav-sidebar flex-column nav-child-indent">
          <li
            :class="[
              service.path === $route.path ? 'menu-open' : '',
              service.separator
                ? 'nav-header py-2 pl-2 font-weight-bold text-uppercase'
                : 'nav-item'
            ]"
            v-for="service in menu"
            :key="service.name"
          >
            <template v-if="service.separator">
              {{ service.name }}
            </template>
            <b-link
              v-else
              class="nav-link"
              :to="service.path"
              exact-active-class="active"
            >
              <b-icon :icon="service.icon" class="nav-icon"></b-icon>
              <p>
                {{ service.name }}
                <b-icon
                  v-if="service.items"
                  :icon="
                    service.path === $route.path
                      ? 'chevron-down'
                      : 'chevron-left'
                  "
                  class="right"
                  font-scale="1"
                ></b-icon>
              </p>
            </b-link>
          </li>
        </b-nav>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        name: "home",
        path: "/home",
        icon: "house"
      },
      {
        name: "Actions",
        separator: true
      },
      {
        name: "Upload data",
        path: "/upload-data",
        icon: "cloud-upload"
      },
      {
        name: "Create Pool",
        path: "/create-pool",
        icon: "columns"
      },
      {
        name: "Join Pool",
        path: "/join-pool",
        icon: "arrow-right-square"
      },
      {
        name: "Create Digital Right",
        path: "/create-drt",
        icon: "file-lock"
      },
      {
        name: "Tokens",
        separator: true
      },
      {
        name: "Manage Tokens",
        path: "/manage-tokens",
        icon: "files"
      },
      {
        name: "Purchase Tokens",
        path: "/purchase-tokens",
        icon: "cart3"
      },
      {
        name: "Manage Data",
        separator: true
      },
      {
        name: "Manage Packages",
        path: "/manage-packages",
        icon: "inboxes"
      },
      {
        name: "Manage Pools",
        path: "/manage-pools",
        icon: "columns-gap"
      },
      {
        name: "Analysis",
        path: "/analysis",
        icon: "pie-chart"
      }
    ]
  })
};
</script>

<style></style>
