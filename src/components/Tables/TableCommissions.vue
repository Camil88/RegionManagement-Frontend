<template>
    <v-card>
    <v-card-title>
      <span class="space">
        Commissions
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
    :items="allCommissions"
    :loading="loading"
    :search="search"
    sort-by="customerName"
    class="elevation-1"
    multi-sort
    :items-per-page="10">

  <!-- <template #[`item.businessType`] = "{ item }"> -->
  <template v-slot:item.businessType="{ item }">
    <v-chip
      v-if="getChipColor(item.businessType)"
      :color="getChipColor(item.businessType)">
      {{ item.businessType }}
    </v-chip>
  </template>

  <!-- <template v-slot:item.commissionValue="{ item }">
    <div :style="getBelowZeroColor(item)">
      {{ item.commissionValue }}
    </div>
  </template> -->
  <template v-slot:item.commissionValue="{ item }">
    <span :style="item.commissionValue < 0 ? 'color: red' : 'color: white'">
      {{ item.commissionValue }}
    </span>  
  </template>


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
          { text: 'Customer name', value: 'customerName', align: 'start'},
          { text: 'Customer Fibu', value: 'customerFibu'},
          { text: 'Product', value: 'product.productName'},
          { text: 'Business type', value: 'businessType'},
          { text: 'Commission %', value: 'commissionProcent'},
          { text: 'Commission value', value: 'commissionValue'},
          { text: 'Revenue', value: 'revenue'},
          { text: 'Gross Profit', value: 'grossProfit'},
          { text: 'Weight', value: 'weight'},
          { text: 'Cubic', value: 'cubic'},
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
    ...mapState('custom', ['allCommissions'])
    },
  
    methods: {
      ...mapActions('custom', ['getAllCommissionsAction']),
      getChipColor(bizType){
        if (bizType == 'Progress') return 'green' 
        else if (bizType == 'Retained') return 'orange'
        else return null
      },

    },

    created() {
      this.loading = true

      try {
        this.getAllCommissionsAction('SFR')  
        this.loading = false     
      } catch (error) {
        console.log(error)
        this.loading = false       
      }
      //this.getAllCommissionsAction()  
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