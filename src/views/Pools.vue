<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4" sm="6" cols="12">
        <b-card no-body>
          <form-wizard
            color="#000"
            step-size="xs"
            title="Create Pool"
            subtitle=" "
          >
            <tab-content title=" " :before-change="validateDataSchema">
              <b-form>
                <b-form-group label="Select Schema Definition">
                  <b-form-select
                    :options="schemas"
                    v-model="schema"
                    value-field="id"
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >Please select an option
                      </b-form-select-option>
                      <b-form-select-option value="file"
                        >Select file
                      </b-form-select-option>
                    </template>
                  </b-form-select>
                </b-form-group>
                <b-form-group v-if="schema === 'file'">
                  <FilePicker
                    pickerId="schema-file"
                    @schema-file="schemaFile = $event"
                  />
                </b-form-group>

                <b-form-group v-if="showPreview">
                  <b-button block v-b-modal.schema-preview
                    >Preview schema
                  </b-button>
                </b-form-group>
                <b-form-group label="Select Data File">
                  <FilePicker
                    pickerId="pool-file"
                    @pool-file="dataFile = $event"
                  />
                </b-form-group>
              </b-form>
            </tab-content>
            <tab-content title=" ">
              <b-table-simple borderless>
                <b-thead>
                  <b-tr>
                    <b-th>Name</b-th>
                    <b-th>Description</b-th>
                    <b-th></b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td>DRT Name</b-td>
                    <b-td>Lorem Ipsum</b-td>
                    <b-td>
                      <b-form-checkbox value="dtr" size="lg"></b-form-checkbox>
                    </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </tab-content>
            <tab-content title="">
              <b-form>
                <b-form-group label="Give your pool a name">
                  <b-form-input
                    type="text"
                    placeholder="Enter name (Max 50 Characters)"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Give a high level description of your pool"
                >
                  <b-form-textarea
                    placeholder="Enter description (Max 200 Characters)"
                  ></b-form-textarea>
                </b-form-group>
              </b-form>
            </tab-content>
          </form-wizard>
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

    <b-modal
      id="schema-preview"
      title="Schema Preview"
      size="xl"
      centered
      hide-footer
    >
      <SchemaPreview :schema="schemaTemplate" />
    </b-modal>
  </b-container>
</template>

<script>
import FilePicker from "@/components/FilePicker";
import SchemaPreview from "@/components/SchemaPreview";
import schemaTemplate from "@/data/patient_genotype_schema.json";
import validations from "@/mixins/validations";

export default {
  components: {
    SchemaPreview,
    FilePicker
  },
  mixins: [validations],
  data() {
    return {
      isTableBusy: false,
      fields: [
        "name",
        "description",
        "digital_rights",
        { key: "actions", label: "" }
      ],
      pools: [],
      dataFile: null,
      schema: null,
      schemaFile: null,
      schemas: [],
      schemaTemplate: schemaTemplate
    };
  },
  computed: {
    showPreview() {
      if (this.schema) {
        return this.schema === "file" ? !!this.schemaFile : true;
      }
      return false;
    }
  },
  mounted() {
    this.getSchemas();
  },
  methods: {
    async getSchemas() {
      await this.axios
        .get("https://63e4d8148e1ed4ccf6e75d6c.mockapi.io/schemas")
        .then(response => {
          this.schemas = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async poolProvider(ctx) {
      this.isTableBusy = true;
      try {
        const response = await this.axios.get(
          "https://63e4d8148e1ed4ccf6e75d6c.mockapi.io/pools"
        );
        this.isTableBusy = false;
        return response.data;
      } catch (error) {
        this.isTableBusy = false;
        return [];
      }
    },
    validateDataSchema() {
      const result = this.validateJsonDataAgainstSchema(
        this.dataFile,
        this.schemaFile
      );
      console.log(result);
      return false;
    }
  }
};
</script>
