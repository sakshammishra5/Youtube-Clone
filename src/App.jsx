import './App.css'
import MainContainer from './components/MainContainer'
import Head from './components/Head'
import Body from './components/Body'
import store from './utils/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchPage from './components/WatchPage'
import SearchResults from './components/SearchResults'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      },
      {
        path: 'searchResults',
        element: <SearchResults />
      }
    ]
  }
])

function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          <div>
            <Body />
          </div>
        </RouterProvider>
      </Provider>
    </>
  )
}

export default App
