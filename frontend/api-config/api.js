import axios from 'axios'
import { get, startsWith } from 'lodash'
import Router from 'next/router'

const api = axios.create({
  baseURL: 'https://excuser.herokuapp.com/v1', //'http://localhost:4000',
  timeout: 30000
})

api.interceptors.request.use(function (request) {
  console.log('GET REQUEST', request)
  return request
})

export default api
