<template>
  <div>
    <form-wizard color="#000" step-size="xs" title="Create Pool" subtitle=" ">
      <tab-content title=" " :before-change="validateDataSchema">
        <b-form>
          <b-form-group label="Select Schema Definition">
            <b-form-select
              :options="schemaList"
              v-model="selectedSchema"
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
          <b-form-group
            v-if="selectedSchema === 'file'"
            :invalid-feedback="schemaValidation.error"
            :state="schemaValidation.success"
          >
            <FilePicker
              pickerId="schema-file"
              @schema-file="validateSchemaFile($event)"
            />
          </b-form-group>

          <b-form-group
            v-if="showPreview && schemaValidation.success !== false"
          >
            <b-button block v-b-modal.schema-preview>Preview schema </b-button>
          </b-form-group>
          <b-form-group label="Select Data File">
            <FilePicker pickerId="pool-file" @pool-file="dataFile = $event" />
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
          <b-form-group label="Give a high level description of your pool">
            <b-form-textarea
              placeholder="Enter description (Max 200 Characters)"
            ></b-form-textarea>
          </b-form-group>
        </b-form>
      </tab-content>
    </form-wizard>

    <b-modal
      id="schema-preview"
      title="Schema Preview"
      size="xl"
      centered
      hide-footer
    >
      <SchemaPreview :schema="schemaTemplate" />
    </b-modal>
  </div>
</template>
<script>
import FilePicker from "@/components/FilePicker";
import SchemaPreview from "@/components/SchemaPreview";
import schemaTemplate from "@/data/patient_genotype_schema.json";
import validations from "@/mixins/validations";
export default {
  components: {
    FilePicker,
    SchemaPreview
  },
  mixins: [validations],
  props: {
    schemaList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dataFile: null,
      selectedSchema: null,
      schemaFile: null,
      schemaValidation: {
        success: null,
        error: null
      },
      schemaTemplate: schemaTemplate
    };
  },
  computed: {
    showPreview() {
      if (this.selectedSchema) {
        return this.selectedSchema === "file" ? !!this.schemaFile : true;
      }
      return false;
    }
  },
  methods: {
    async validateSchemaFile(file) {
      this.schemaValidation = {
        success: null,
        error: null
      };
      if (file) {
        const schema = await this.readAsText(file);
        const result = await this.validateSchema(JSON.parse(schema));
        this.schemaValidation = result;
      }
      this.schemaFile = file;
    },
    async validateDataSchema() {
      const result = this.validateJsonDataAgainstSchema(
        this.dataFile,
        this.schemaFile
      );
      return result.success;
    }
  }
};
</script>
<style lang=""></style>
