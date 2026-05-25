import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';
import Calculator from '@/pages/MainPage';
import MainPage from '@/pages/MainPage';

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="pro" element={<MainPage/>} />
        </Route>
    </Routes>
};

export default AppRouter;