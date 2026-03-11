import { BrowserRouter } from "react-router-dom"
import AppLayout from "./cmps/layout/AppLayout"

const App = () => {
  return (
    <div>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppLayout />
      </BrowserRouter>
    </div>
  )
}

export default App
