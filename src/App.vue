<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "plain") + "-layout";
    }
  }
};
</script>
