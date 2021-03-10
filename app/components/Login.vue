<template>
  <Page class="page">
    <ActionBar>
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="onButtonTap"
      />
      <Label text="Login" />
    </ActionBar>
    <StackLayout>
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
    </StackLayout>
  </Page>
</template>

<script>
import Home from "./Home";

export default {
  components: {
    Home,
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
              { name: "MaximumLength", params: { length: 10 } },
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
          this.$refs.formComment.commitAll();
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
  },
};
</script>

<style lang="scss" scoped>
.error-message {
  color: red;
}
</style>
