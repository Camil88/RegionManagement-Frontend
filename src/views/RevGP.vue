<template>
  <v-container class="mainWidth">
    <v-row>
      <v-col cols="6">
        <BarChartGlobal1 />
        <!-- <Bar v-if="loaded"
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData"
        />
        :data="getAllSales" -->
      </v-col>
      <v-col cols="6">
        <BarChartGlobal2 />
        <!-- <Bar
          id="my-chart-id"
          :options="chartOptions"
          :data="getAllSales"
        /> -->
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
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {

    components: {
      TableRevGP,
      Bar,
      BarChartGlobal1,
      BarChartGlobal2
    },

    data() {
      return {
      chartData: this.allSalesPerformance,
        chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      },
      loaded: false
      }
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
      // this.renderChart(
      //   {
      //   labels: ['Division', 'Revenue'],
      //   datasets: [
      //     {
      //       data: [
      //       this.allSalesPerformance.division,
      //       this.allSalesPerformance.revenue,
      //       ]
      //     }
      //   ]
      // }
      // )
    },

  }
</script>

<style scoped>
  .mainWidth {
    max-width: calc(100vw * 0.9);
  }
</style>
