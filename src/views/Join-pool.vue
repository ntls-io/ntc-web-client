<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-table
          head-variant="dark"
          fixed
          show-empty
          :fields="fields"
          :items="items"
        >
          <template v-slot:cell(actions)>
            <b-button size="sm" variant="outline-dark">Join Pool </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "name",
        "description",
        "digital rights",
        { key: "actions", label: "" }
      ],
      items: [
        {
          name: "Aisha",
          description: "Watts",
          "digital rights": "Lorem"
        }
      ]
    };
  }
};
</script>

<style></style>
