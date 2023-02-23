<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4" sm="6" cols="12">
        <b-card no-body>
          <CreatePool />
        </b-card>
      </b-col>

      <b-col cols="12">
        <b-card no-body>
          <b-row class="my-3 mx-1">
            <b-col>
              <b-form-group class="m-0">
                <b-form-input type="text" placeholder="Search"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="auto">
              <b-form-checkbox switch size="lg">
                Show my pools
              </b-form-checkbox>
            </b-col>
          </b-row>

          <b-table
            head-variant="dark"
            borderless
            :busy.sync="isTableBusy"
            show-empty
            :fields="fields"
            :items="poolProvider"
          >
            <template #table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle" variant="dark"></b-spinner>
              </div>
            </template>
            <template v-slot:cell(actions)>
              <b-button size="sm" variant="outline-dark">Join Pool </b-button>
            </template>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CreatePool from "@/components/CreatePool";

export default {
  components: {
    CreatePool
  },
  data() {
    return {
      isTableBusy: false,
      fields: [
        "name",
        "description",
        "digital_rights",
        { key: "actions", label: "" }
      ]
    };
  },
  methods: {
    async poolProvider(ctx) {
      this.isTableBusy = true;
      try {
        const response = await this.axios.get(
          "https://63e4d8148e1ed4ccf6e75d6c.mockapi.io/pools"
        );
        this.isTableBusy = false;
        return response.data || [];
      } catch (error) {
        this.isTableBusy = false;
        return [];
      }
    }
  }
};
</script>
