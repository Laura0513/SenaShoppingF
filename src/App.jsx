import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './pages/Login'

export default function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </main>
    )
}
