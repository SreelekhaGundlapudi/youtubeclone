
import { Provider } from "react-redux"
import Body from "./components/Body"
import Header from "./components/Header"
import store from "./utils/store"

function App() {
  return (
    <Provider store={store}>
    <div className="min-h-screen bg-grey-100">
   
      <Header />
      {/* Add padding-top to offset fixed header height */}
      <div className="pt-[64px] ">
        <Body />
      </div>
    </div>
    </Provider>
  )
}

export default App

