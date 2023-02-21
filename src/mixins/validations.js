import Ajv from 'ajv';

export default {
  methods: {
    validateJsonDataAgainstSchema(data, schema) {
      const ajv = new Ajv();
      const validate = ajv.compile(schema);
      return { success: validate(data), error: ajv.errorsText(validate.errors) }
    },
  },
};
