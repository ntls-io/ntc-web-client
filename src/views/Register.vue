<template>
  <b-container fluid>
    <b-row class="h-100 justify-content-center">
      <b-col sm="7" md="6" lg="4">
        <b-card>
          <b-form
            class="form-signin text-center"
            @submit.prevent="register"
            :validated="isValid"
          >
            <h3 class="mb-3 font-weight-bolder">Create Account</h3>

            <b-form-group>
              <b-form-input
                trim
                type="text"
                placeholder="Full Name"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                trim
                type="text"
                placeholder="Cell Number"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                trim
                type="email"
                placeholder="Email Address"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                trim
                type="password"
                placeholder="Password"
              ></b-form-input
            ></b-form-group>
            <b-form-group class="mb-2" invalid-feedback="passwords don't match">
              <b-form-input
                trim
                type="password"
                placeholder="Confirm Password"
              ></b-form-input>
            </b-form-group>

            <b-button block type="submit">
              SIGN UP
            </b-button>
          </b-form>

          <template v-slot:footer>
            <p class="text-muted text-center small m-0">
              Already have an account? <br />
              Go to
              <router-link to="login" class="text-dark font-weight-bold"
                >Sign In
              </router-link>
            </p>
          </template>
          <b-overlay :show="isBusy" no-wrap></b-overlay>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      isBusy: false,
      form: {
        body: {
          email: "",
          name: "",
          surname: "",
          password: "",
          password_confirmation: ""
        }
      }
    };
  },
  methods: {
    register() {}
  }
};
</script>
