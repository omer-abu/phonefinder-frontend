import { HashRouter } from "react-router-dom"
import AppLayout from "./cmps/layout/AppLayout"

const App = () => {
  return (
    <div>
      <HashRouter>
        <AppLayout />
      </HashRouter>
    </div>
  )
}

export default App
