<template>
    <v-container class="mainWidth">
      <TableCustomers />
    </v-container>
  </template>
  
  <script>
  import TableCustomers from '@/components/Tables/TableCustomers.vue'
  
  export default {
  
  components: {
      TableCustomers
  }
  
  }
  </script>
  
  <style>
    .mainWidth {
      max-width: calc(100vw * 0.9);
    }
  </style>