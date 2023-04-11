<template>
  <v-container class="mainWidth">
    <v-row>
      <v-col cols="6">
        <BarChartGlobal1 />
      </v-col>
      <v-col cols="6">
        <BarChartGlobal2 />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
      <TableRevGP />
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import TableRevGP from '@/components/Tables/TableRevGP.vue';
import BarChartGlobal1 from '@/components/Charts/BarChartGlobal1.vue';
import BarChartGlobal2 from '@/components/Charts/BarChartGlobal2.vue';

  export default {

    components: {
      TableRevGP,
      BarChartGlobal1,
      BarChartGlobal2
    },

    computed: {
      ...mapState('custom', ['allSalesPerformance']),
      ...mapGetters('custom', ['getAllSales']),
    },

    methods: {
      ...mapActions('custom', ['getAllSalesPerformanceAction']),
    },

    mounted() {   
      
      this.loaded = false
      try {
        this.getAllSalesPerformanceAction('SFR')
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    },

  }
</script>

<style scoped>
  .mainWidth {
    max-width: calc(100vw * 0.9);
  }
</style>
