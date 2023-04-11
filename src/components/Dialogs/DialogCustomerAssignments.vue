<template>
    <v-card color="backCol">
        <v-list-item lines="two" >
            <v-list-item-content>
                <v-list-item-title class="mb-1">Customer Fibu Assignments</v-list-item-title>
                <v-list-item-subtitle>Find and update current customer assignments </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-container fluid>
            <TableCustomerAssignments/>
        </v-container>   
    </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TableCustomerAssignments from '../Tables/TableCustomerAssignments.vue'

export default {

    components: {
        TableCustomerAssignments
    },
    computed: {
        ...mapState('custom', ['allEvents'])
    },
    methods: {
        ...mapActions('custom', ['getEvents'])
    },
    created() {
        this.getEvents()
    },
}
</script>

<style scoped>
  .backCol {
    background-color:#222736
  }

  .fontCol {
    color: beige;
  }
</style>
