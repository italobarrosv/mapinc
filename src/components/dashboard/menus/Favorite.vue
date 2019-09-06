<template>
  <div>
    <v-card>
      <v-card-title>LUGARES FAVORITOS</v-card-title>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-title v-text="item.rating"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  // OBJETIVO MOSTRAR LISTA DE LUGARES FAVORITOS REMOVER FAVORITOS E POSICIONAR DESTINO OU LUGAR ATUAL
  components: {},
  name: 'ListFavoritePlace',
  data: () => ({
    items: [
      {
        icon: true,
        title: 'PLACE 1',
        rating: '5',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        title: 'PLACE 2',
        rating: '5',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      },
      {
        title: 'PLACE 3',
        rating: '5',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      },
      {
        title: 'PLACE 4',
        rating: '5',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      },
    ],
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
