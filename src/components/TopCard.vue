<template>
  <v-container 
    fluid
    class="mt-2"
  >
    <v-card color="#2A3142">
      <v-row>
        <TopCardButtons />
      </v-row>

      <v-row>
        <v-col cols="2" class="pr-0 py-0">
          <v-card-title class="text-h5 font-weight-light">
              <span 
                class="fontColor space">{{ titleForTopCard }}</span> 
          </v-card-title>
          <v-card-subtitle
            class="pb-0">
              <v-breadcrumbs 
              :items="items" 
              class="pl-0 pt-0 divider  breadFont">
                  <template v-slot:divider>
                      <v-icon>mdi-chevron-right</v-icon>
                  </template>
              </v-breadcrumbs>
          </v-card-subtitle>
        </v-col>

        <v-col cols="10" class="d-inline-flex pl-0 py-0">

          <v-item-group class="d-inline-flex align-center ">
            <v-btn-toggle
            dense
              tile
              color="secondary"
              group
              >
              <v-btn class="fontW" value="left">
                Current month
              </v-btn>
              <v-btn class="fontW" value="center">
                Current week
              </v-btn>
              <v-btn class="fontW" value="right">
                Yesterday
              </v-btn>
              <v-btn class="fontW" value="justify">
                Last month
              </v-btn>
            </v-btn-toggle>
              <v-tab class="fontW">Bieżący miesiąc</v-tab>
              <v-tab class="fontW">Bieżący tydzień</v-tab>
              <v-tab class="fontW">Wczoraj</v-tab>
              <v-tab class="fontW">Poprzedni miesiąc</v-tab>
            </v-tabs> -->
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
                  class="ma-2"
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
                label="date range:"
                class="ml-4 text-body-2"
                dense
                readonly>
            </v-text-field>
          </v-item-group>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import TopCardButtons from './Buttons/TopCardButtons.vue'

export default {
    data: () => ({
      items: [
        {
          text: 'SalesCore',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'AFR',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Rev & GP',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      dates: ['2019-09-10', '2019-09-20']
    }),

    methods: {
    },
    
    computed: {
      ...mapGetters('custom', ['titleForTopCard']),

      datesRangeText() {
        return this.dates.join("  -  ")
      }
    },

    components: {
      TopCardButtons
    }
}
</script>

<style scoped>

.divider >>> .v-breadcrumbs__divider {
  padding: 0;
}

.breadFont >>> .v-breadcrumbs__item {
  font-size: 12px !important;
}

.fontW {
  font-weight: 400;
  font-size: smaller;
}

.fontColor {
  color: #c4c6cb;
}

.space {
    letter-spacing: 1.5px;
  }
</style>
