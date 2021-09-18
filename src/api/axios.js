import axios from 'axios'

// ---------------LOCAL MACHINE API ------------------

axios.defaults.baseURL = 'http://localhost:3000/api'

// ---------------PUBLIC API --------------------------

//axios.defaults.headers.common['Authorization'] = 'gfregerhhtte'
//axios.defaults.headers.common['Authorization'] = 12345
// axios.defaults.baseURL = 'https://conduit.productionready.io/api'

export default axios
