<template>
    <Bar
      id="my-chart-id2"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart2',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: ['SFR', 'AFR', 'DTG', 'TS'],
          datasets: [ { 
            label: 'Rvenue per month',
            backgroundColor: '#F50057',
            data: [110765, 98542, 172980, 33240] 
        } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>
  
  