<template>
  <Page class="page">
    <ActionBar>
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="onButtonTap"
      />
      <Label text=""></Label>
    </ActionBar>
    <StackLayout class="login-page">
      <Label text="Login" class="h1 text-center"></Label>
      <StackLayout class="hr m-10"></StackLayout>
      <RadDataForm
        ref="loginForm"
        :source="loginForm"
        :metadata="loginFormMetaData"
        class="m-r-10 m-l-10"
      >
      </RadDataForm>
      <Button text="Login" class="-primary" @tap="onButtonLoginTap" />
      <ActivityIndicator :busy="loading" />
      <GridLayout columns="auto,auto" horizontalAlignment="center">
        <Label text="Do not have account?" col="0"></Label>
        <Label
          text="click here"
          col="1"
          class="register-link"
          @tap="onRegiterLinkTap"
        ></Label>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import axios from "redaxios";
import { device } from "@nativescript/core/platform";
import Home from "./Home";
import Register from "./Register";
import Dashboard from "./Dashboard";

export default {
  components: {
    Home,
    Register,
    Dashboard,
  },
  data() {
    return {
      hasError: false,
      loading: false,
      loginForm: {
        email: "",
        password: "",
      },
      loginFormMetaData: {
        isReadOnly: false,
        commitMode: "Immediate",
        validationMode: "immediate",
        propertyAnnotations: [
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
            ],
          },
        ],
      },
    };
  },
  methods: {
    onButtonLoginTap() {
      this.loading = true;
      this.$refs.loginForm.validateAll().then((result) => {
        if (result) {
          this.$refs.loginForm.commitAll();
          this.loginForm.token_name = `${device.model}-${device.deviceType}-${device.uuid}`;

          axios
            .post("http://10.0.2.2:8000/api/login", this.loginForm, {
              headers: { accept: "application/json" },
            })
            .then((response) => {
              const { message, data } = response.data;
              this.$store.dispatch("user/setToken", data.token);

              this.$navigateTo(Dashboard, {
                clearHistory: true,
              });
            })
            .catch((error) => {
              const { errors, message } = error.data;
              this.errorMessage = message;
              if (error.status == 422) {
                for (const key in errors) {
                  if (Object.hasOwnProperty.call(errors, key)) {
                    const field = this.$refs.loginForm.getPropertyByName(key);
                    field.errorMessage = errors[key][0];
                    this.$refs.loginForm.notifyValidated(key, false);
                  }
                }
              }
            });
        } else {
          this.hasError = true;
        }
      });
      this.loading = false;
    },
    onButtonTap() {
      this.$navigateTo(Home, {
        clearHistory: true,
      });
    },
    onRegiterLinkTap() {
      this.$navigateTo(Register, {
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

.register-link {
  color: orange;
  margin-left: 5;
}
</style>
