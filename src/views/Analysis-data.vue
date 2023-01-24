<template>
  <b-container>
    <b-row>
      <b-col>
        <b-table head-variant="dark" show-empty :fields="fields"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Analysis",
  data() {
    return {
      fields: ["Name", "Description", "State", ""]
    };
  }
};
</script>

<style></style>
