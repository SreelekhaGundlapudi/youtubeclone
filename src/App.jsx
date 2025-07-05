
import { Provider } from "react-redux"
import Body from "./components/Body"
import Header from "./components/Header"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Maincomponent from "./components/Maincomponent"
import Watchpage from "./components/Watchpage"

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
    path:"/",
    element:<Maincomponent/>
  },
  {
    path:"/watch",
    element:<Watchpage/>
  }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="min-h-screen bg-grey-100">
   
      <Header />
      <div className="pt-[64px] ">
       <RouterProvider router={appRouter}/>
      </div>
    </div>
    </Provider>
  )
}

export default App

