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
      <Label
        :text="slider.title"
        backgroundColor="#50000000"
        horizontalAlignment="center"
      />
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        { title: "Slider 1" },
        { title: "Slider 2" },
        { title: "Slider 3" },
      ],
    };
  },
};
</script>