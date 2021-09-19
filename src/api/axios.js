import axios from 'axios'
import {getItem} from '@/helpers/resistanceStorage'

// ---------------LOCAL MACHINE API ------------------

axios.defaults.baseURL = 'http://localhost:3000/api'

// ---------------PUBLIC API --------------------------

//axios.defaults.headers.common['Authorization'] = 'gfregerhhtte'
//axios.defaults.headers.common['Authorization'] = 12345
// axios.defaults.baseURL = 'https://conduit.productionready.io/api'

axios.interceptors.request.use(config => {
  const token = getItem('accessToken')
  const authorizationToken = token ? `Token ${token}` : ''
  config.headers.Authorization = authorizationToken
  return config
})

export default axios
