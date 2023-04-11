<template>
    <v-navigation-drawer
    app
    permanent
    :mini-variant.sync="mini"
    width="215"
    color="#2A3142"
    floating
    class=""
    >

    <v-list
      dense
      class="py-0">
      <v-list-item class="px-0">
        <v-list-item-avatar class="ml-2 mt-0" v-if="mini" height="70">
          <v-img 
            contain
            class="imgCursor"
            src="../assets/logoImg.png"
            >
          </v-img>          
        </v-list-item-avatar>
        <v-list-item-avatar class="ml-5" tile width="170" height="50" v-else>
          <v-img 
            contain
            src="../assets/logo.png"
            >
          </v-img>          
        </v-list-item-avatar>

        <v-btn
          icon
          @click.stop="mini = !mini">
          <v-icon color="blue-grey lighten-1" class="text-h6">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>

    <v-list
      nav 
      dense
      >
      <v-subheader 
        v-show="!mini"
        class="text-uppercase subheaderText">
        Overview
      </v-subheader>

      <v-list-group
        v-for="groupItem in groupOverview"
        :key="groupItem.id"
        @click="setProductName(groupItem.value)"
        no-action
        class="iconMargin iconColor"
        append-icon="mdi-chevron-down text-h6 fontParams"
        :prepend-icon="groupItem.icon">

          <template v-slot:activator>
            <v-list-item-title 
              class="font-weight-regular fontParams">
              {{ groupItem.text }}
            </v-list-item-title>
          </template>

          <v-list-item
          v-for="item in itemsOverview"
          :key="item.id"
          :to="item.route"
          link
          class="pl-13">
            <v-list-item-icon class="mr-4 iconColor">
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular fontParams"> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>          
      </v-list-group>

      <v-subheader 
        v-show="!mini"
        class="text-uppercase subheaderText">
        Sales Segments
      </v-subheader>

      <v-list-group
        v-for="groupItem in groupSalesAFR"
        :key="groupItem.id"
        @click="setProductName(groupItem.value)"
        no-action
        class="iconMargin iconColor"
        append-icon="mdi-chevron-down text-h6"
        :prepend-icon="groupItem.icon">

          <template v-slot:activator>
            <v-list-item-title  
              class="font-weight-regular fontParams">
              {{ groupItem.text}}
            </v-list-item-title>
          </template>

          <v-list-item
          v-for="item in itemsSales"
          :key="item.id"
          :to="item.route"
          link
          class="pl-13">
            <v-list-item-icon class="mr-4 iconColor">
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular fontParams"> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-group>


      <v-list-group
        v-for="groupItem in groupSalesSFR"
        :key="groupItem.id"
        @click="setProductName(groupItem.value)"
        no-action
        class="iconMargin iconColor"
        append-icon="mdi-chevron-down text-h6"
        :prepend-icon="groupItem.icon">

          <template v-slot:activator>
            <v-list-item-title  
              class="font-weight-regular fontParams">
              {{ groupItem.text}}
            </v-list-item-title>
          </template>

          <v-list-item
          v-for="item in itemsSales"
          :key="item.id"
          :to="item.route"
          link
          class="pl-13">
            <v-list-item-icon class="mr-4 iconColor">
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular fontParams"> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-group>



      <v-list-group
        v-for="groupItem in groupSalesTRT"
        :key="groupItem.id"
        @click="setProductName(groupItem.value)"
        no-action
        class="iconMargin iconColor"
        append-icon="mdi-chevron-down text-h6"
        :prepend-icon="groupItem.icon">

          <template v-slot:activator>
            <v-list-item-title  
              class="font-weight-regular fontParams">
              {{ groupItem.text}}
            </v-list-item-title>
          </template>

      <v-list-group
        v-for="subgroupItem in subgroupTRTSales"
        :key="subgroupItem.id"
        @click="setProductName(subgroupItem.value)"
        no-action
        sub-group
        class="iconMargin iconColor"
        append-icon="mdi-chevron-down text-h6"
        :prepend-icon="subgroupItem.icon">

          <template v-slot:activator>
            <v-list-item-title  
              class="font-weight-regular fontParams">
              {{ subgroupItem.text}}
            </v-list-item-title>
          </template>

        <v-list-item
          v-for="item in itemsSales"
          :key="item.id"
          :to="item.route"
          link
          class="pl-13">
            <v-list-item-icon class="mr-4 iconColor">
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular fontParams"> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-group>  
      </v-list-group>

      <v-list-group
        v-for="groupItem in groupSalesRest"
        :key="groupItem.id"
        @click="setProductName(groupItem.value)"
        no-action
        class="iconMargin iconColor"
        append-icon="mdi-chevron-down text-h6"
        :prepend-icon="groupItem.icon">

          <template v-slot:activator>
            <v-list-item-title  
              class="font-weight-regular fontParams">
              {{ groupItem.text}}
            </v-list-item-title>
          </template>

        <v-list-item
          v-for="item in itemsSales"
          :key="item.id"
          :to="item.route"
          link
          class="pl-13">
            <v-list-item-icon class="mr-4 iconColor">
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular fontParams"> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-group>
      
      <v-subheader 
        v-show="!mini"
        class="text-uppercase subheaderText">
        Commissions
      </v-subheader>

      <v-list-group
        v-for="groupItem in groupCommission"
        :key="groupItem.id"
        no-action
        class="iconMargin iconColor"
        append-icon="mdi-chevron-down text-h6"
        :prepend-icon="groupItem.icon">

          <template v-slot:activator>
            <v-list-item-title
              class="font-weight-regular fontParams">
              {{ groupItem.text}}
            </v-list-item-title>
          </template>

        <v-list-item
          v-for="item in itemsCommission"
          :key="item.id"
          :to="item.route"
          link
          class="pl-13">
            <v-list-item-icon class="mr-4 iconColor">
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular fontParams"> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-group>   

      <v-list-group
        v-for="groupItem in groupShipments"
        :key="groupItem.id"
        no-action
        class="iconMargin iconColor"
        append-icon="mdi-chevron-down text-h6"
        :prepend-icon="groupItem.icon">

          <template v-slot:activator>
            <v-list-item-title
              class="font-weight-regular fontParams">
              {{ groupItem.text}}
            </v-list-item-title>
          </template>

        <v-list-item
          v-for="item in itemsShipments"
          :key="item.id"
          :to="item.route"
          link
          class="pl-13">
            <v-list-item-icon class="mr-4 iconColor">
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular fontParams"> {{ item.text }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list-group>        
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {  mapMutations, mapActions } from 'vuex'

export default {
    data () {
      return {
        selectedItem: 0,
        mini: true,

        groupOverview: [
          { id: 1,  text: "Global", value: "", icon: "mdi-sigma"},
        ],
        itemsOverview: [
          { id: 1.1, text: "Rev & GP", icon: "mdi-chart-timeline-variant-shimmer", route: '/revgp' },
          { id: 1.2, text: "Customers", icon: "mdi-account-multiple-outline", route: '/customers'  }
        ],
        groupSalesAFR: [
          { id: 2, text: "Airfreight", value: "AFR", icon: "mdi-airplane" },
        ],
        groupSalesSFR: [
          { id: 3, text: "Seafreight", value: "SFR", icon: "mdi-ferry" },
        ],
        groupSalesTRT: [
          { id: 4, text: "Road", value: "DTG", icon: "mdi-truck-outline" }
        ],
        groupSalesRest: [
          { id: 5, text: "Rail", value:"RLS", icon: "mdi-train-car-container" },
          { id: 6, text: "Warehouse", value:"CLC", icon: "mdi-barcode-scan" },
          { id: 7, text: "Tele Sales", value:"TS", icon: "mdi-headset" }
        ],
        subgroupTRTSales: [
          { id: 2.1, text: "Domestic", value: "DTG" },
          { id: 2.2, text: "International",  value: "ITG"},
          { id: 2.3, text: "Full Load Domestic",  value: "DTF" },
          { id: 2.4, text: "Full Load Intl.", value: "ITF" },          
        ],
        itemsSales: [
          { id: 2.7, text: "Rev & GP", icon: "mdi-chart-timeline-variant-shimmer", route: '/revgp' },
          { id: 2.8, text: "Stats", icon: "mdi-calculator-variant-outline", route: '/stats'  }
        ],
        groupCommission: [
          { id: 8,  text: "Finances", icon: "mdi-currency-usd" },
        ],
        itemsCommission: [
          { id: 9.1,  text: "Performance", icon: "mdi-chart-timeline-variant-shimmer", route: '/commissions' },
        ],
        groupShipments: [
          { id: 9, text: "Shipments", icon: "mdi-package-variant" }
        ],
        itemsShipments: [
          { id: 9.2,  text: "Quantity", icon: "mdi-numeric", route: '/shipments' },
        ],

  }
},

methods: {
  ...mapActions('custom', ['getAllSalesPerformanceAction']),
  ...mapMutations('custom', ['setTopCardTitle']),

  setProductName(value) {
    this.setTopCardTitle(value)
    this.getAllSalesPerformanceAction(value)
  },

},

}
</script>

<style scoped>
.imgCursor {
  cursor: pointer;
}

.subheaderText {
  font-size: 10px !important;
  color: #a0a3a4; 
  letter-spacing: 1px;
}

.iconMargin >>> .v-list-item__icon.v-list-group__header__prepend-icon {
  margin-right: 20px;
  color: #a0a3a4;
}

.iconColor >>> .theme--dark.v-icon {
  color: #a0a3a4;
}

.fontParams {
  color: #a0a3a4; 
  font-size: 14px !important;
}




</style>

