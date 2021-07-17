<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <GridLayout
        orientation="horizontal"
        ios:horizontalAlignment="left"
        android:horizontalAlignment="left"
        columns="20*, 60*, 20*"
      >
        <Label
          text.decode="&#xf007;"
          col="0"
          class="fas text-left"
          @tap="onDrawerButtonTap"
        ></Label>
        <Label text="Dashboard" col="1" class="text-center"></Label>
        <Label text="" col="2" class="text-center"></Label>
      </GridLayout>
    </ActionBar>

    <ScrollView>
      <GridLayout rows="auto, auto, 100">
        <AbsoluteLayout row="0">
          <StackLayout class="hero" width="100%" top="0" orientation="vertical">
            <Label text="Hello Choirool!" class="h1"></Label>
            <Label text="Lorem ipsum dolor"></Label>
          </StackLayout>
          <StackLayout top="125" width="100%">
            <GridLayout
              class="balance"
              orientation="horizontal"
              columns="auto, *, auto"
            >
              <StackLayout col="0">
                <Label text="Saldo saya" class="text"></Label>
                <Label text="Rp. 20.000"></Label>
              </StackLayout>
              <StackLayout col="1"></StackLayout>
              <Button text="+ Isi saldo" col="2"></Button>
            </GridLayout>
          </StackLayout>
        </AbsoluteLayout>
        <GridLayout
          row="1"
          class="products"
          columns="25*, 25*, 25*, 25*"
          orientation="vertical"
        >
          <StackLayout col="0" class="product-items" orientation="horizontal">
            <Image src="res://globe" />
            <Label text="Global"></Label>
          </StackLayout>
          <StackLayout col="1" class="product-items" orientation="horizontal">
            <Image src="res://signal" />
            <Label text="Pulsa"></Label>
          </StackLayout>
          <StackLayout col="2" class="product-items" orientation="horizontal">
            <Image src="res://refresh" />
            <Label text="Refund"></Label>
          </StackLayout>
          <StackLayout
            col="3"
            class="product-items"
            orientation="horizontal"
            @tap="showMoreProduct"
          >
            <Image src="res://more_menu" />
            <Label text="Lainnya"></Label>
          </StackLayout>
        </GridLayout>
      </GridLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as drawer from "../../utils/drawer";
import SelectedPageService from "../../utils/selected-page-service";
import MoreProduct from "./MoreProduct";

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Search");
  },
  data() {
    return {};
  },
  methods: {
    onDrawerButtonTap() {
      drawer.showDrawer();
    },
    showMoreProduct() {
      this.$showBottomSheet(MoreProduct, {});
    },
  },
  computed: {
    user() {
      this.$store.getters.user;
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

.page {
  background-color: rgb(212, 212, 212);
}

.page-title {
  text-align: center;
}

.hero {
  background-color: rgb(247, 124, 53);
  height: 150;
  padding-left: 10;
  padding-top: 10;

  Label {
    color: #fff;
  }
}

.balance {
  background-color: #fff;
  height: 60;
  width: 95%;
  border-radius: 10;
  padding-left: 10;
  padding-top: 2;

  StackLayout {
    Label {
      &.text {
        color: rgb(247, 124, 53);
        font-size: 17;
      }
    }
  }

  Button {
    color: rgb(247, 124, 53);
    background-color: #fff;
    border-color: rgb(247, 124, 53);
    border-style: solid;
    border-width: 1;
    border-radius: 5;
    height: 30;
  }
}

.products {
  margin-top: 5;
  padding-left: 5;
  padding-right: 5;

  .product-items {
    background-color: #fff;
    margin: 5;
    border-radius: 5;
    padding: 7;

    Image {
      width: 20;
      height: 20;
      margin-right: 5;
    }
  }
}
</style>
