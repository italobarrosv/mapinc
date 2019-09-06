import axios from 'axios'
import store from '@/store.js'
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

// ENDPOINTS -----------------------------------------------------------

export const apiGetUser = data => apiReqres().get('/users/' + data)
export const apiRegisterUser = data => apiReqres().post('/register', data)
export const apiLoginUser = data => apiReqres().post('/login', data)
export const apiUpdateUser = data => apiReqres().put('/users' + data)
