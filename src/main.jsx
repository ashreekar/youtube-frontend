import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { appStore } from './states/appStore.js'

const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const CreateAccount = lazy(() => import("./pages/CreateAccount.jsx"));
const ResultsPage = lazy(() => import("./pages/ResultsPage.jsx"));
const VideoPlayerPage = lazy(() => import("./pages/VideoPlayerPage.jsx"));
const ChannelPage = lazy(() => import("./pages/ChannelPage.jsx"));
const CustomizeChannel = lazy(() => import("./components/Channel/CustomizeChannel.jsx"));

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import HomePageLoader from './components/Loaders/HomePage/HomePageLoader.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Suspense fallback={<HomePageLoader/>}><LandingPage /></Suspense>
        },
        {
          path: "/results",
          element: <Suspense fallback={<HomePageLoader/>}> <ResultsPage /></Suspense>
        },
        {
          path: "/feed/you",
          element: <Suspense fallback={<HomePageLoader/>}> <ChannelPage /></Suspense>
        },
        {
          path: "/feed/you/settings/",
          element: <Suspense fallback={<HomePageLoader/>}><CustomizeChannel /></Suspense>
        },
        {
          path: "/watch/:videoId",
          element: <Suspense fallback={<HomePageLoader/>}><VideoPlayerPage /></Suspense>
        },
        {
          path: "/channel/:channelId",
          element: <Suspense fallback={<HomePageLoader/>}> <ChannelPage /></Suspense>
        },
      ]
    },
    {
      path: "/login",
      element: <Suspense> <Login /></Suspense>
    },
    {
      path: "/create-account",
      element: <Suspense> <CreateAccount /></Suspense>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>,
)
