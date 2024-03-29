# Axios hook for React

React hook built to simplify using Axios with Reacts and typescript. 

# Installation

  Yarn
  ```
    yarn add axios-query-hook
  ```
  NPM
  ```
    npm i axios-query-hook
  ```

# Usage
  Import AxiosQueryProvider 
  ```
    import { AxiosQueryProvider } from "axios-query-hook"
  ```
  Decalare axios configuration. Add your API base url and headers here.
  ```
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders,
      baseUrl: "https://dummyjson.com",
    }
  ```
  Wrap your app with AxiosQueryProvider
  ```
    function App() {
      return (
        <AxiosQueryProvider config={config}>
          <div className="App">
          </div>
        </AxiosQueryProvider>
      )
    }
  ```

# Example usage
  You can now use useQuery in all your components. 
  ```
    import { useQuery } from "axios-query-hook"
  ```

  useQuery takes generic request and response types which provides expected type for both our POST request data and query response. 
  ```
      const { requestHandler, response, loading, error } = useQuery<
        RegisterRequestType,
        RegisterResponseType
    >({
        method: "POST",
        url: "auth/login",
        data: {
          username: "kminchelle",
          password: "0lelplR",
        },
    })
  ```
# useQuery Props
  | Property      | Type          | Use         |
  | ------------- | ------------- | ------------|            
  | fetchOnMount  | Boolean       | Request is sent as soon as component mounts when set to true |
  | data          |               | Axios Request body |
  | Method        | "POST","GET", "PUT" e.t.c | Specifies request method |
  | url           | string        | Request route |
  

# useQuery returns :
  - requestHandler - Call to initiate request.
  - loading  - Indicates request loading state.
  - error - contains request error when it fails.
  - response - contains request response on success.
  

