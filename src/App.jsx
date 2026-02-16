import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Entrepreneurs from './pages/Entrepreneurs'
import ProductDetail from './pages/ProductDetail'

export default function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/entrepreneurs" element={<Entrepreneurs />} />
                <Route path="/productDetail" element={<ProductDetail />} />
            </Routes>
            <Footer />
        </main>
    )
}
