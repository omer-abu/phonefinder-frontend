import { HashRouter } from "react-router-dom"
import AppLayout from "./cmps/layout/AppLayout"

const App = () => {
  return (
    <div>
      <HashRouter basename={import.meta.env.BASE_URL}>
        <AppLayout />
      </HashRouter>
    </div>
  )
}

export default App
