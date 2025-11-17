import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { appStore } from './states/appStore.js'

import LandingPage from './pages/LandingPage.jsx'
import Login from './pages/Login.jsx'
import CreateAccount from './pages/createAccount.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <App />,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/results",
          element: <App />
        },
        {
          path: "/feed/you",
          element: <App />
        },
        {
          path: "/watch/:videoId",
          element: <App />
        },
        {
          path: "/channel/:channelId",
          element: <App />
        },
        {
          path: "/:id",
          element: <App />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/create-account",
      element: <CreateAccount />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>,
)
