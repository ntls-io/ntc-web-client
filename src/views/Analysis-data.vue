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
            <div class="d-flex justify-content-around">
              <b-button size="sm" variant="outline-dark">Sell </b-button>
              <b-button size="sm" variant="outline-dark"
                >View results
              </b-button>
            </div>
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
        "state",
        "listed on marketplace",
        { key: "actions", label: "" }
      ],
      items: [
        {
          name: "Aisha",
          description: "Watts",
          state: "active",
          "listed on marketplace": "yes"
        }
      ]
    };
  }
};
</script>

<style></style>
