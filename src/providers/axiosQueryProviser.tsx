import { createContext } from "react"
import { AxiosRequestHeaders } from "axios"
import React from "react"

export type axiosQueryConfig = {
  headers: AxiosRequestHeaders | undefined
  baseUrl: string
}

export const AxiosQueryContext = createContext<{ config: axiosQueryConfig }>({
  config: { headers: undefined, baseUrl: "" },
})

export const AxiosQueryProvider = ({
  config,
  children,
}: {
  children: JSX.Element
  config: axiosQueryConfig
}) => {
  return (
    <AxiosQueryContext.Provider value={{ config }}>
      {children}
    </AxiosQueryContext.Provider>
  )
}
