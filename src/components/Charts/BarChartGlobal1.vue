<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart1',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: ['202301', '202302', '202303', '202304', '202305', '202306', '202307', '202308', '202309'],
          datasets: [ { 
            label: 'Gross Profit per month',
            backgroundColor: '#6200EA',
            data: [48756, 39668, 40789, 59230, 55100, 37190, 44190, 43876, 48176] 
        } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>
  
  