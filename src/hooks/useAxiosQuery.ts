import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AxiosQueryContext } from "../providers/axiosQueryProviser"
import { Method } from "axios"

type useQueryProps<T> = {
  method?: Method
  data?: T
  url?: string
  fetchOnMount?: boolean
}

export const useQuery = <T, R>(props: useQueryProps<T>) => {
  const { data, url, method = "GET", fetchOnMount } = props
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState<R>()

  const { config } = useContext(AxiosQueryContext)

  const requestHandler = async () => {
    setError(null)
    setLoading(true)
    try {
      const res = await axios({
        method,
        url: `${config.baseUrl}/${url || ""}`,
        data,
        headers: {
          ...config.headers,
        },
      })

      setResponse(res.data || (res as R))
    } catch (err: any) {
      console.log(err.response?.data?.message || err.message)
      setError(err.response?.data?.message || err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (fetchOnMount) {
      requestHandler()
    }
  }, [])

  return { requestHandler, loading, error, response }
}
