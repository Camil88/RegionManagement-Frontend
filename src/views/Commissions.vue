<template>
  <v-container class="mainWidth">
    <TableCommissions />
  </v-container>
</template>

<script>
import TableCommissions from '@/components/Tables/TableCommissions.vue'

export default {

components: {
    TableCommissions
}

}
</script>

<style>
  .mainWidth {
    max-width: calc(100vw * 0.9);
  }
</style>