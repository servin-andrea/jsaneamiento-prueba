import { useState } from 'react'
import api from './api'

const useGetAll = (path) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = () => {
    setError(null)
    setLoading(true)
    api.get(`/${path}`)
      .then(response => {
        //console.log(response)
        setData(response.data)
        setError(null)
        setLoading(false)
      })
      .catch(_error => {
        setData(null)
        setError(`Cannot get ${path} list`)
        setLoading(false)
      })
  }

  return { data, loading, error, execute }
}

export default useGetAll
