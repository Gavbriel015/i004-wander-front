import { Routes, Route } from 'react-router-dom'
// import PrivateRoute from './PrivateRoutes'
import Register from '../components/Register/Register'
import UserProfile from '../components/UserProfile/UserProfile'
import Login from '../components/LoginForm/LoginForm'
import ConfirmRegister from '../components/ConfirmRegister/ConfirmRegister'
import PaymentMethod from '../components/PaymentMethod/PaymentMethod'
import PaymentDetails from '../components/PaymentDetails/PaymentDetails'
const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirm-register" element={<ConfirmRegister />} />
            <Route path="/payment-method" element={<PaymentMethod />} />
            <Route path="/payment-details" element={<PaymentDetails />} />            

            {/* <Route element={<PrivateRoute />}>
                <Route path="/UserProfile" element={<UserProfile />} />

            </Route> */}

            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}


export default AppRoutes