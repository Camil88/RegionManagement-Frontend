<template>
    <v-card>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="mb-1">Raeports</v-list-item-title>
                <v-list-item-subtitle>Generate Excel reports </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

            <v-card flat>
                <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col 
                        cols="12"
                        sm="9"
                        md="9"
                        class="d-inline-flex"
                        >

                        <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                      <template v-slot:activator="{ on}">
                        <v-btn
                          v-on="on"
                          outlined
                          >
                          <v-icon>
                            mdi-calendar-multiselect-outline
                          </v-icon>
                        </v-btn>
                      </template>
                      <v-date-picker
                        v-model="dates"
                        range
                        color="indigo accent-3"
                        header-color="purple darken-1"
                      ></v-date-picker>
                    </v-menu>

                    <v-text-field
                        v-model="datesRangeText"
                        class="ml-4"
                        dense
                        readonly>
                    </v-text-field>

                  </v-col>                    
                  </v-row>

                  <v-row class="my-0">
                    <v-col
                        cols="6"

                    >
                        <v-checkbox

                        label="Rev & GP Report"
                        color="secondary"
                        hide-details
                        ></v-checkbox>
                        <v-checkbox

                        label="Shipments Report"
                        color="secondary"
                        hide-details
                        ></v-checkbox>
                    </v-col>
                    <v-col
                        cols="6"

                    >
                        <v-checkbox

                        label="Commissions Report"
                        color="secondary"
                        hide-details
                        ></v-checkbox>
                        <v-checkbox

                        label="Users Report"
                        color="secondary"
                        hide-details
                        ></v-checkbox>
                    </v-col>
    </v-row>

    <v-row class="alignButton">
        <v-col cols="12">
            <v-btn
                outlined
                small
                color="primary">
                Generate .XLSX
            </v-btn>
        </v-col>
    </v-row>

                </v-container>
                </v-card-text>
            </v-card>

    </v-card>
</template>

<script>


export default {
    data: () => ({
      dates: ['2019-09-10', '2019-09-20']
    }),

    computed: {
      datesRangeText() {
        return this.dates.join("  -  ")
      }
    },

}
</script>

<style scoped>
  .alignButton {
    text-align: center;
  }
</style>

