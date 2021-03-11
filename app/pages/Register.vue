<template>
  <Page class="page">
    <ActionBar>
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="onButtonTap"
      />
      <Label text="" />
    </ActionBar>
    <StackLayout>
      <Label text="Register" class="h1 text-center"></Label>
      <StackLayout class="hr m-10"></StackLayout>
      <Label
        :text="errorMessage"
        v-if="errorMessage !== ''"
        class="h4 text-center error-message"
      ></Label>
      <Label
        :text="successMessage"
        v-if="successMessage !== ''"
        class="h4 text-center success-message"
      ></Label>
      <StackLayout v-if="!successRegister">
        <RadDataForm
          ref="registerForm"
          :source="registerForm"
          :metadata="registerFormMetaData"
          class="m-r-10 m-l-10"
        >
        </RadDataForm>
        <Button text="Register" class="-primary" @tap="onButtonRegisterTap" />
        <ActivityIndicator :busy="loading" />
        <GridLayout columns="auto,auto" horizontalAlignment="center">
          <Label text="Already have account?" col="0"></Label>
          <Label
            text="click here to login"
            col="1"
            class="login-link"
            @tap="onLoginLinkTap"
          ></Label>
        </GridLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import axios from "redaxios";
import { hideKeyboard } from "../utils/native-api";
import Home from "./Home";
import Login from "./Login";

export default {
  components: {
    Home,
    Login,
  },
  data() {
    return {
      errorMessage: "",
      successMessage: "",
      successRegister: false,
      loading: false,
      registerForm: {
        name: "",
        email: "",
        password: "",
      },
      registerFormMetaData: {
        isReadOnly: false,
        commitMode: "Immediate",
        validationMode: "immediate",
        propertyAnnotations: [
          {
            name: "name",
            displayName: "Name",
            validators: [
              {
                name: "NonEmpty",
                params: { errorMessage: "This field is required" },
              },
              { name: "MaximumLength", params: { length: 10 } },
            ],
          },
          {
            name: "email",
            displayName: "Email",
            editor: "Email",
            validators: [
              {
                name: "NonEmpty",
                params: { errorMessage: "This field is required" },
              },
            ],
          },
          {
            name: "password",
            displayName: "Password",
            editor: "password",
            validators: [
              {
                name: "NonEmpty",
                params: { errorMessage: "This field is required" },
              },
              { name: "MinimumLength", params: { length: 2 } },
            ],
          },
        ],
      },
    };
  },
  methods: {
    onButtonRegisterTap() {
      this.loading = true;
      this.$refs.registerForm.validateAll().then((result) => {
        if (result) {
          this.$refs.registerForm.commitAll();

          axios
            .post(`${APP_URL}/api/register`, this.registerForm, {
              headers: { accept: "application/json" },
            })
            .then((response) => {
              const { message } = response.data;
              this.successRegister = true;
              this.successMessage = message;
              this.loading = false;
              hideKeyboard();
            })
            .catch((error) => {
              const { errors, message } = error.data;
              this.errorMessage = message;

              for (const key in errors) {
                if (Object.hasOwnProperty.call(errors, key)) {
                  const field = this.$refs.registerForm.getPropertyByName(key);
                  field.errorMessage = errors[key][0];
                  this.$refs.registerForm.notifyValidated(key, false);
                }
              }
            });
        }

        this.loading = false;
      });
    },
    onButtonTap() {
      this.$navigateTo(Home, {
        clearHistory: true,
      });
    },
    onLoginLinkTap() {
      this.$navigateTo(Login, {
        clearHistory: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.error-message {
  color: red;
}

.login-link {
  color: orange;
  margin-left: 5;
}
</style>
