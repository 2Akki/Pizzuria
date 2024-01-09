/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux"
import { Navigate, redirect } from "react-router-dom";

function ProtectedRoute({ children }) {
   
   const user= useSelector((s)=>s.user.username)
   console.log(user)
   const isUserTrue = user!== "";
   return isUserTrue?children:<Navigate to="/"/>
}

export default ProtectedRoute
