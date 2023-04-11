<template>
    <v-card>
    <v-card-title>
      <span class="space">
        Customers
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
    :items="allCustomerAssignments"
    :loading="loading"
    :search="search"
    sort-by="customerName"
    class="elevation-1"
    multi-sort
    :items-per-page="10">
  </v-data-table>
  </v-card>


  <!-- <div
        v-for="item in allCommissions"
        :key="item.customerFibu"
        > 
        {{ item.customerFibu }}
        {{ item.commissionProcent }}
        {{ item.commissionValue }}

      </div> -->

</template>






<script>
import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        // UWAGA: aby zaczytało do tabeli dane należy ustawić w headers wartość value= nazwie pola z API
        headers: [
          { text: 'Customer name', value: 'customer.contractorName', align: 'start'},
          { text: 'Customer Fibu', value: 'customerFibu'},
          { text: 'Street', value: 'customer.street'},
          { text: 'City', value: 'customer.city'},
          { text: 'Zip code', value: 'customer.zipCode'},
        ],

        loading: true,
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
    ...mapState('custom', ['allCustomerAssignments'])
    },
  
    methods: {
      ...mapActions('custom', ['getAllCustomerAssignmentsAction']),


    },

    created() {
      this.loading = true

      try {
        this.getAllCustomerAssignmentsAction()  
        this.loading = false     
      } catch (error) {
        console.log(error)
        this.loading = false       
      }

    }
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