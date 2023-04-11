<template>
  <v-container fluid class="d-inline-flex">
    <v-dialog
      v-model="dialog"
      max-width="1330"

      >
      <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="primary"
            class="mx-3 font-weight-regular"
            rounded
            outlined
            small
          >
          <v-icon
            left>
            mdi-pencil-plus-outline
          </v-icon>
            Customer Assignments
          </v-btn>
        </template>
          <DialogCustomerAssignments />
    </v-dialog>

    <v-dialog
      v-model="dialog2"
      max-width="450">
      <template v-slot:activator="{ on, attrs }">
          <v-btn
          v-bind="attrs"
            v-on="on"
            color="success"
            class="mr-2 font-weight-regular"
            rounded
            outlined
            small
          >
          <v-icon
            left>
            mdi-microsoft-excel
          </v-icon>
            Reports
          </v-btn>
      </template>
      <DialogReports />
    </v-dialog>
  </v-container>
</template>

<script>
import DialogCustomerAssignments from '../Dialogs/DialogCustomerAssignments.vue';
import DialogReports from '../Dialogs/DialogReports.vue';

export default {
    data() {
        return {
            dialog: false,
            dialog2: false
        }
    },

    components: {
      DialogCustomerAssignments,
      DialogReports
    }
}
</script>

<style scoped>
.fff {
  background-color: blue;
}
</style>
