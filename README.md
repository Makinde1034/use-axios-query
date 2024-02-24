# Axios hook for React

React hook built to simplify using Axios with Reacts. 

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
  import useQuery 
  ```
    import { useQuery } from "axios-query-hook"
  ```

  useQuery takes generic request and response types which provides expected type for both our POST request data and query response. 
  ```
      const { requestHandler, response, loading, error } = useQuery<
        RegisterRequest,
        RegisterResponse
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
  | First Header  | Second Header |
  | ------------- | ------------- |
  | Content Cell  | Content Cell  |
  | Content Cell  | Content Cell  |

  
  



