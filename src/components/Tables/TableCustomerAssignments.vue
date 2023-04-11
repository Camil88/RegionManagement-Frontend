<template>
    <v-card>
    <v-card-title>
      <span class="space">
        Customer Assignments
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
    :items-per-page="10"
    height="550">

    <v-template>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        dense
        color="primary"
        @click="editItem(item)"
      >
        mdi-pencil-outline
      </v-icon>
      <v-icon
        dense
        color="warning"
        @click="deleteItem(item)"
      >
        mdi-delete-outline
      </v-icon>
    </template>


  </v-data-table>
  </v-card>

</template>



<script>
import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        headers: [
          { text: 'Customer name', value: 'customer.contractorName', align: 'start'},
          { text: 'Customer Fibu', value: 'customerFibu'},
          { text: 'Street', value: 'customer.street'},
          { text: 'City', value: 'customer.city'},
          { text: 'Zip code', value: 'customer.zipCode'},
          { text: 'Sales representative', value: 'user.userName'},
          { text: 'Division', value: 'user.division'},
          { text: 'Actions', value: 'actions', sortable: false },
        ],

        editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },

        loading: true,
        search: '',
        dialog: false,
        dialogDelete: false,
        editedIndex: -1,
        desserts:[]
      }

    },

    computed: {
    ...mapState('custom', ['allCustomerAssignments'])
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
  
    methods: {
      ...mapActions('custom', ['getAllCustomerAssignmentsAction']),

 
      editItem (item) {
        this.editedIndex = this.allCustomerAssignments.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        console.log(item)
      },

      deleteItem (item) {
        this.editedIndex = this.allCustomerAssignments.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.allCustomerAssignments.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.allCustomerAssignments[this.editedIndex], this.editedItem)
        } else {
          this.allCustomerAssignments.push(this.editedItem)
        }
        this.close()
      },

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

  .space {
    letter-spacing: 3px;
    color: gray;
  }

  .backCol {
    background-color:#222736
  }
</style>
