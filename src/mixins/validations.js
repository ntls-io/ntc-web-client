import Ajv from "ajv";

export default {
  methods: {
    validateJsonDataAgainstSchema(data, schema) {
      const ajv = new Ajv();
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
