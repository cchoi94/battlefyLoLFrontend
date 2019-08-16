import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://battlefy-tc-backend-cc.herokuapp.com'
})

export default instance