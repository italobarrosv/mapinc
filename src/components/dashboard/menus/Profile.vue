<template>
  <div class="component__card">
    <v-card>
      <v-img
        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
        height="300px"
      >
        <v-layout column fill-height>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn dark icon class="mr-3" @click="modEditProfile">
              <v-icon>edit</v-icon>
            </v-btn>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-title>
            <div class="title__str" v-if="flagEditName">
              {{ $store.state.name }}
            </div>
            <div class="title__str" v-if="flagEditNameInput">
              <v-text-field
                v-model="newUser.name"
                label="Novo Nome"
              ></v-text-field>
            </div>
          </v-card-title>
        </v-layout>
      </v-img>
      <v-list-item class="list_tyle">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Id</v-list-item-title>
            <v-list-item-subtitle>{{ $store.state.id }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Email</v-list-item-title>
            <v-list-item-subtitle v-if="flagEditEmail">{{
              $store.state.email
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-text-field
            v-model="newUser.email"
            v-if="flagEditEmailInput"
            label="Novo email"
          ></v-text-field>
        </v-list-item>
      </v-list-item>
      <v-btn class="pa-5" v-if="saveFlagEdit" @click="saveEdit"> SAVE</v-btn>
    </v-card>
  </div>
</template>

<script>
import { apiUpdateUser } from '@/services/apiReqres/'
import { mapActions } from 'vuex'
export default {
  // OBJETIVO VISUALIZAR DADOS DO USUARIO E DITAR
  name: 'Profile',
  components: {},
  // props: {
  //   dialogProfile: {
  //     type: Boolean,
  //     default: () => ({}),
  //   },
  // },
  data: () => ({
    newUser: {
      email: '',
      name: '',
    },
    saveFlagEdit: false,
    flagEditEmail: true,
    flagEditEmailInput: false,
    flagEditName: true,
    flagEditNameInput: false,
  }),
  methods: {
    ...mapActions({
      SNACKBAR: 'SET_SNACKBAR',
    }),
    saveEdit() {
      apiUpdateUser(this.newUser)
        .then(res => {
          console.log(res, 'RESPOSTA')
          this.$store.dispatch('SET_USER', {
            id: 2,
            email: this.newUser.email,
            name: this.newUser.name,
          })
          this.SNACKBAR({
            open: true,
            timeout: 10000,
            message: `Alterado com sucesso`,
            color: `teal`,
          })
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.saveFlagEdit = false
          this.flagEditEmail = true
          this.flagEditEmailInput = false
          this.flagEditName = true
          this.flagEditNameInput = false
        })
    },
    modEditProfile() {
      this.saveFlagEdit = true
      this.flagEditEmail = false
      this.flagEditEmailInput = true
      this.flagEditName = false
      this.flagEditNameInput = true
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.list__style
  text-align left
  display flex
  flex-direction column

.title__str
  color var(--white)

.component__card
  display flex
  flex-direction column
  justify-content center
  align-items center
  max-width 420px
  max-height 600px
</style>
