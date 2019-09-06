<template>
  <div class="placecurrent__component">
    <v-toolbar dense floating class="toolbar__component">
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
        v-model="searchPlace"
      ></v-text-field>
      <v-btn icon @click.prevent="myCurrentPlace">
        <v-icon>my_location</v-icon>
      </v-btn>
    </v-toolbar>
    <v-dialog dark v-model="dialogPlaceCard" max-width="344">
      <PlaceCard :dialog-place-card="dialogPlaceCard" :data-places="places" />
    </v-dialog>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import { apiGetNearbyPlaces } from '@/services/apiGoogle/'
export default {
  // OBJETIVO IPUNT PARA BUSCAR O LUGAR ATUAL NA API
  components: {
    PlaceCard: () => import('@/components/dashboard/place/PlaceCard.vue'),
  },
  name: 'CurrentPlace',
  data: () => ({
    dialogPlaceCard: false,
    searchPlace: '',
    places: [],
    obj: {
      name: 'kevin place',
      info: 'info sobre o place',
    },
    rate: 0,
    comment: '',
  }),
  methods: {
    fnCurrentPlace(searchPlace) {
      console.log('CURRENT PLACE')
      if (!searchPlace) {
        return (this.places = [])
      }
      apiGetNearbyPlaces({
        location: {
          lat: -8.0397483,
          lng: -34.9202588,
          key: 'AIzaSyDEaBim7hB871nYhXS0pMG98rZSoRkoOME',
        },
      })
        .then(res => {
          console.log(res, 'RESPOSTA')
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.places = this.obj
          this.dialogPlaceCard = true
          console.log('FINAL')
        })
    },
    fnMarkPlace() {
      console.log('MARK')
      // this.places.push()
    },
  },
  watch: {
    searchPlace: debounce(function(val) {
      this.fnCurrentPlace(val)
    }, 600),
  },
  computed: {
    placeFavorite() {
      return this.$store.state.favoritePlaces.map(el => ({
        id: el.placeId,
        name: el.placeName,
        icon: el.placeIcon,
      }))
    },
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.placecurrent__component
  display flex !important
  justify-content center !important

.toolbar__component
  border-radius 8px
  max-width 400px !important
</style>
