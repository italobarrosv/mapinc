import axios from 'axios'
import store from './../../store'
const apiGoogle = () =>
  axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/',
    headers: {
      'X-Requested-With': 'XML HttpRequest',
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

// export const apiGetMap = () =>
//   apiGoogle().post(`js?key=${store.state.keyGoogle}&callback=initMap`)
export const apiGetNearbyPlaces = data =>
  apiGoogle().get('/place/nearbysearch', data)
export const apiGetDetailPlaces = data =>
  apiGoogle().get('/place/details/', data)
