import axios from 'axios'
import store from './store'
const apiReqres = () =>
  axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
      'X-Requested-With': 'XML HttpRequest',
      Authorization: `Bearer${store.state.token}`,
    },
    transformResponse: [
      data => {
        data = JSON.parse(data)
        return data
      },
    ],
    timeout: 60000,
  })

export const apiGetUser = data => api().get('/users/' + data)
export const apiRegisterUser = obj => api().post('/register', obj)
export const apiLoginUser = obj => api().post('/login', obj)
export const apiUpdateUser = (data, obj) => api().put('/users' + data, obj)
