<template>
  <b-tabs content-class="mt-3">
    <b-tab title="Table" active>
      <b-table
        :items="[schema.properties]"
        responsive
        stacked="sm"
        head-variant="dark"
        caption-top
      >
        <template #table-caption
          >The schema needs to be an <b>{{ schema.type }}</b>
        </template>

        <template #head()="data">
          <small
            class="text-warning"
            v-if="schema.required.includes(data.label)"
            >Required
          </small>
          <p class="mb-1">{{ data.label.toUpperCase() }}</p>
        </template>

        <template #cell()="data">
          <h5>
            <b-badge variant="primary"
              >{{ data.value.type.toUpperCase() }}
            </b-badge>
          </h5>
        </template>
      </b-table>
    </b-tab>
    <b-tab title="Tree">
      <pre>{{ schema }}</pre>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  props: {
    schema: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
