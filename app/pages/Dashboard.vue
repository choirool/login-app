<template>
  <Page actionBarHidden="true">
    <GridLayout height="100%">
      <Frame id="main-dashboard" height="100%">
        <MainDashboard />
      </Frame>
      <Frame @loaded="moreProductLoaded" ref="moreProduct">
        <MoreProduct />
      </Frame>
    </GridLayout>
  </Page>
</template>

<script>
import MainDashboard from "../components/Dashboard/MainDashboard";
import MoreProduct from "../components/Dashboard/MoreProduct";
import { screen } from "@nativescript/core/platform";
import { Frame as frameModule } from "@nativescript/core/ui/frame";

export default {
  components: {
    MainDashboard,
    MoreProduct,
  },
  data() {
    return {};
  },
  methods: {
    moreProductLoaded() {
      const morePorductFrame = this.$refs.moreProduct.nativeView;
      morePorductFrame.translateY = screen.mainScreen.heightDIPs;

      frameModule.on("morePorductTap", () => {
        morePorductFrame.animate({
          translate: { x: 0, y: screen.mainScreen.heightDIPs - 300 },
          duration: 500,
        });
      });

      frameModule.on("morePorductSwipeDown", () => {
        morePorductFrame.animate({
          translate: { x: 0, y: screen.mainScreen.heightDIPs },
          duration: 500,
        });
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
