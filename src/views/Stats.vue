<template>
  <v-container class="mainWidth">
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-img
            src="../assets/stat_chart1.png"
            ></v-img>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-img
            src="../assets/stat_chart2.png"
            ></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-img
            src="../assets/stat_chart3.png"
            ></v-img>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-img
            src="../assets/stat_chart4.png"
            ></v-img>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>


  export default {

    components: {

    },
  }
</script>

<style scoped>
  .mainWidth {
    max-width: calc(100vw * 0.9);
  }
</style>
