<template>
  <div class="component__card">
    <v-card class="mx-auto">
      <v-card-title>Place</v-card-title>
      <v-card-text>Informations</v-card-text>
      <div class="box__text">
        <v-text-field
          class="text__style"
          label="comentario sobre"
        ></v-text-field>
        <v-text-field
          class="text__style"
          label="Que Nota você dá?"
        ></v-text-field>
      </div>
      <v-card-actions>
        <v-btn class="btn__save">Salvar como favorito</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  // OBJETIVO MOSTRAR DADOS DO LUGAR UTILIZANDO CARD AVALIAR LUGAR
  components: {},
  data: () => ({
    rating: 1,
  }),
  name: 'CardPlace',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.btn__save
  background var(--primary) !important

.box__text
  display flex
  flex-direction column
  justify-content center

.text__style
  max-width 250px

.component__card
  width 100%
  height 100%
</style>
