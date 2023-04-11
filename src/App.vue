<template>
  <v-app>
    <Navbar />
    <Navdrawer />
    <v-main class="bkgCol">
      <TopCard />
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Navdrawer from "./components/Navdrawer.vue";
import TopCard from "./components/TopCard.vue"
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Navdrawer,
    TopCard,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>

* {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    /* overflow: hidden;     */

  }

  body {
    margin: 0px;

  }
.bkgCol {
  background-color: #222736;
}

</style>
