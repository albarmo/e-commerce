<template>
  <div class="home">
    <Banner />
    <!-- HomePage -->
    <div class="container-x">
      <div class="box-homes">
        <div class="container">
          <!-- Itemcard Loop data dari server -->
          <ItemCard />
        </div>
      </div>
    </div>
    <!-- HomePage end -->
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import ItemCard from "@/components/ItemCard.vue";

export default {
  name: "Home",
  components: {
    // Login,
    Banner,
    ItemCard
  },
};
</script>

<style>
body {
  width: 100%;
  background-color: black;
  justify-content: center;
}

.home {
  width: 100%;
}
.container-x {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 0, 0);
}

.box-homes {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
