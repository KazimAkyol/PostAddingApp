import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {

    const [token] = useToken()

    return (
        <div>
            <BrowserRouter>
                {token?.token && <Navbar />}
                <Modal />
                <Routes>
                    <Route path="/" element={!token?.token ? <Link to={'/auth'} /> : <Home />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
}

export default App;
