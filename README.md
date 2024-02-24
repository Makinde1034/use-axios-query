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
