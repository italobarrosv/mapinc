<template>
  <div class="component__card">
    <v-card class="mx-auto">
      <v-card-title>{{ dataPlaces.name }}</v-card-title>
      <v-card-text>{{ dataPlaces.info }}</v-card-text>
      <div class="box__text">
        <v-text-field
          dark
          class="text__style"
          v-model="comment"
          label="comentario sobre"
        ></v-text-field>
        <v-text-field
          :rules="ruleRating"
          v-model="rating"
          type="number"
          dark
          class="text__style"
          label="Que Nota você dá de 0 à 5?"
        ></v-text-field>
      </div>
      <v-card-actions>
        <v-btn @click="avaliation" class="btn__save"
          >Salvar como favorito</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // OBJETIVO MOSTRAR DADOS DO LUGAR UTILIZANDO CARD AVALIAR LUGAR
  components: {},
  props: {
    dataPlaces: {
      type: [Array, Object],
      required: true,
      default: () => ({}),
    },
  },
  data: () => ({
    rating: Number,
    comment: '',
    result: {},
  }),
  name: 'CardPlace',
  methods: {
    ...mapActions({
      SNACKBAR: 'SET_SNACKBAR',
    }),
    avaliation() {
      if (this.rating <= 5) {
        this.result = {
          rating: this.rating,
          comment: this.comment,
          ...this.dataPlaces,
        }
        console.log('RESULT', this.result)
        this.$store.dispatch('SET_FAVORITEPLACE', this.result)
        this.SNACKBAR({
          open: true,
          timeout: 10000,
          message: `Lugar salvo em favorito`,
          color: `danger`,
        })
      } else {
        this.SNACKBAR({
          open: true,
          timeout: 10000,
          message: `Digite um nota de 0 à 5`,
          color: `danger`,
        })
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.btn__save
  margin-left 15%
  background var(--primary) !important

.box__text
  display flex
  flex-direction column
  justify-content center

.text__style
  text-align center
  margin-left 15%
  max-width 250px

.component__card
  width 100%
  height 100%
</style>
