import { Route, Routes } from "react-router-dom"
import { Home } from "./assets/pages/Home"
import { Login } from "./assets/pages/Login"
import { UserProfile } from "./assets/pages/UserProfile"
import { ProtectedRoute } from "./assets/pages/ProtectedRoute"


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/user/:id" element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
        
      }/>
    </Routes>
  )
}