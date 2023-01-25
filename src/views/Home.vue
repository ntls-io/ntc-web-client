<template>
  <b-container fluid>
    <b-row>
      <b-col cols="auto">
        <b-table-simple borderless>
          <b-tr>
            <b-td> Available balance </b-td>
            <b-td>$ALGO 25.00</b-td>
            <b-td>
              <b-button-group size="sm">
                <b-button variant="warning">Withdraw</b-button>
                <b-button variant="success">Top up</b-button>
              </b-button-group>
            </b-td>
          </b-tr>
        </b-table-simple>
        <b-list-group class="pb-3">
          <b-list-group-item class="d-flex justify-content-between">
            Data Pool
            <span>1</span>
          </b-list-group-item>

          <b-list-group-item class="d-flex justify-content-between ">
            Digital Rights Tokens Sold
            <span>3</span>
          </b-list-group-item>

          <b-list-group-item class="d-flex justify-content-between">
            Digital Rights Tokens Purchased
            <span>1</span>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            Amount Paid Out
            <span>$20</span>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table head-variant="dark" show-empty :fields="fields"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      fields: ["Name", "Description", "Digital Rights", ""]
    };
  }
};
</script>
