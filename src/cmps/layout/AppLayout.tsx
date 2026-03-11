import Introduction from "../Introduction"
import PhoneIndex from "../../pages/PhoneIndex"
import { Navigate, Route, Routes } from "react-router-dom"

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/phones"
              replace
            />
          }
        />

        <Route
          path="/phones"
          element={
            <>
              <Introduction />
              <PhoneIndex />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default AppLayout
