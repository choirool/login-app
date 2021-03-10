<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <StackLayout>
      <Button text="Login" @tap="onlOginTap" />
      <Button text="Register" @tap="onRegisterTap" />
    </StackLayout>
  </Page>
</template>

<script>
import axios from "redaxios";
import Login from "./Login";
import Register from "./Register";

export default {
  components: {
    Login,
    Register,
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
</style>
