<template>
  <Page actionBarHidden="true">
    <GridLayout height="100%">
      <Frame id="main-dashboard" height="100%">
        <MainDashboard />
      </Frame>
    </GridLayout>
  </Page>
</template>

<script>
import MainDashboard from "../components/Dashboard/MainDashboard";

export default {
  components: {
    MainDashboard,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
