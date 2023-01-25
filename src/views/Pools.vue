<template>
  <b-container fluid>
    <b-row>
      <b-col sm="4">
        <b-card title="Create Pool">
          <form-wizard color="#000" step-size="xs" title=" " subtitle=" ">
            <tab-content title=" ">
              <b-form>
                <b-form-group label="Select Schema Definition">
                  <b-form-select></b-form-select>
                </b-form-group>
                <b-form-group label="Select Data File">
                  <b-form-select></b-form-select>
                </b-form-group>
                <b-form-group label="Select Wallet">
                  <b-form-select></b-form-select>
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

      <b-col>
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
            fixed
            show-empty
            :fields="fields"
            :items="items"
          >
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
