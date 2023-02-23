import Ajv from "ajv";
const ajv = new Ajv();

export default {
  methods: {
    async validateSchema(schema) {
      const validate = await ajv.validateSchema(schema);
      return {
        success: validate,
        error: ajv.errorsText(ajv.errors)
      };
    },
    validateJsonDataAgainstSchema(data, schema) {
      const validate = ajv.compile(schema);
      return {
        success: validate(data),
        error: ajv.errorsText(validate.errors)
      };
    },
    readAsText(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
      });
    }
  }
};
