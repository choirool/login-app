<template>
  <Page class="page" actionBarHidden="true">
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <StackLayout>
      <GridLayout rows="600, auto">
        <StackLayout row="0">
          <slider></slider>
        </StackLayout>
        <StackLayout row="1">
          <Button text="Login" class="login-btn" @tap="onlOginTap" />
          <Button text="Register" class="register-btn" @tap="onRegisterTap" />
        </StackLayout>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import Login from "./Login";
import Register from "./Register";
import Slider from "../components/Home/Slider";

export default {
  components: {
    Login,
    Register,
    Slider,
  },
  methods: {
    onlOginTap() {
      this.$navigateTo(Login, {
        clearHistory: true,
      });
    },
    onRegisterTap() {
      this.$navigateTo(Register, {
        clearHistory: true,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}

.page {
  // margin-top: 22;
}

.login-btn {
  color: rgb(253, 253, 253);
  background-color: orange;
  border-color: orange;
  border-style: solid;
  border-width: 1;
}

.register-btn {
  color: orange;
  background-color: white;
  border-color: orange;
  border-style: solid;
  border-width: 2;
}
</style>
