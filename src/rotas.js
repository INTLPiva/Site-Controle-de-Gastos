import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Graficos } from './pages/Graficos';

export function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Graficos' element={<Graficos />} />
            </Routes>
        </BrowserRouter>
    )
}