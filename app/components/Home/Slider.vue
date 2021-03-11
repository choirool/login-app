<template>
  <Carousel
    height="100%"
    width="100%"
    pageChanged="myChangeEvent"
    pageTapped="mySelectedEvent"
    indicatorColor="#fff000"
    finite="true"
    bounce="false"
    showIndicator="true"
    verticalAlignment="top"
    android:indicatorAnimation="swap"
    color="white"
  >
    <CarouselItem
      :id="i"
      backgroundColor="#fff"
      verticalAlignment="middle"
      v-for="(slider, i) in sliders"
      :key="i"
    >
      <GridLayout rows="*, auto">
        <Image :src="`res://${slider.backgroundImage}`" />
        <Label :text="slider.title" horizontalAlignment="center" />
      </GridLayout>
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        { title: "Slider 1", backgroundImage: "slider_1" },
        { title: "Slider 2", backgroundImage: "slider_2" },
        { title: "Slider 3", backgroundImage: "slider_3" },
      ],
    };
  },
};
</script>