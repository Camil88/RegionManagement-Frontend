<template>
    <v-card>
    <v-card-title>
      <span class="space">
        Revenue & GP
      </span>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  
  <v-data-table
    :headers="headers"
    :items="allSalesPerformance"
    :loading="loading"
    :search="search"
    sort-by="customerName"
    class="elevation-1"
    multi-sort
    :items-per-page="10">

  <template v-slot:item.grossProfit="{ item }">
    <span :style="item.grossProfit < 0 ? 'color: red' : 'color: lightseagreen'">
      {{ item.grossProfit }}
    </span>  
  </template>


  </v-data-table>
  </v-card>

</template>






<script>
import { mapState } from 'vuex';

  export default {
    data() {
      return {
        // UWAGA: aby zaczytało do tabeli dane należy ustawić w headers wartość value= nazwie pola z API
        headers: [
          { text: 'Customer name', value: 'contractorName', align: 'start'},
          { text: 'Customer Fibu', value: 'customerFibu'},
          { text: 'Product', value: 'productName'},
          { text: 'Division', value: 'division'},
          { text: 'Shipment period', value: 'shpmntPeriod'},
          { text: 'Sales Rep', value: 'user.userName'},
          { text: 'Revenue', value: 'revenue'},
          { text: 'Gross Profit', value: 'grossProfit'},
          { text: 'Budget', value: 'budget'}
        ],

        loading: false,
        search: ''
        //xx: true,
        // snackbar: {
        //   message: '',
        //   type: error,
        //   visible: false
        // }

      }

    },

    computed: {
    ...mapState('custom', ['allSalesPerformance'])
    },
  


    // created() {
    //   this.loading = true

    //   try {
    //     this.getAllSalesPerformanceAction('SFR')  
    //     this.loading = false     
    //   } catch (error) {
    //     console.log(error)
    //     this.loading = false       
    //   }

    // }
  }

</script>

<style scoped>
  /* .searchWidth {
    width: min-content;
  } */

  .space {
    letter-spacing: 3px;
    color: gray;
  }

  .backCol {
    background-color:#222736
  }
</style>