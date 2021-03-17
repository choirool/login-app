<template>
  <Page class="page" actionBarHidden="true" ref="page">
    <StackLayout class="wrapper">
      <StackLayout class="handler"></StackLayout>
      <FlexboxLayout
        alignItems="flex-start"
        justifyContent="space-between"
        class="more-product-header-wrapper"
      >
        <Label text="Plilihan layanan" class="more-product-header"></Label>
        <Label
          text.decode="&#xf00d;"
          class="fas close-btn"
          @tap="closePage"
        ></Label>
      </FlexboxLayout>
      <FlexboxLayout
        backgroundColor="#fff"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="flex-start"
      >
        <Label text="first" width="80" height="80" class="product-item" />
        <Label text="second" width="80" height="80" class="product-item" />
        <Label text="third" width="80" height="80" class="product-item" />
        <Label text="third" width="80" height="80" class="product-item" />
        <Label text="third" width="80" height="80" class="product-item" />
        <Label text="third" width="80" height="80" class="product-item" />
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { GestureTypes } from "@nativescript/core";
import { Frame } from "@nativescript/core/ui/frame";
export default {
  mounted() {
    this.$refs.page.nativeView.on(GestureTypes.swipe, (args) => {
      if (args.direction == 8) {
        this.closePage();
      }
    });
  },
  methods: {
    closePage() {
      Frame.topmost().notify({ eventName: "morePorductSwipeDown" });
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  background-color: rgb(212, 212, 212);

  .wrapper {
    padding-left: 10;
    padding-right: 10;
    background-color: #fff;
    border-top-left-radius: 15;
    border-top-right-radius: 15;
  }
}

.more-product-header-wrapper {
  margin-bottom: 10;

  .more-product-header {
    font-size: 20;
  }

  .close-btn {
    font-size: 20;
  }
}

.handler {
  background-color: rgb(196, 196, 196);
  margin-top: 5;
  width: 50;
  height: 5;
}

.product-item {
  border-color: orange;
  border-style: solid;
  border-width: 2;
  border-radius: 50%;
  margin-right: 3;
  margin-left: 3;
  margin-top: 5;
}
</style>
