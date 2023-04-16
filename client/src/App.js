import { useEffect } from 'react';
import './App.css';
import { useLocation, BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartMenu, Checkout, Confirmation, Home, ItemDetails, Navbar } from './scenes';


const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null;
}

const AllRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/item/:itemId",
        element: <ItemDetails />
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
        path: "checkout/success",
        element: <Confirmation />
    },

]

const renderRoutes = () => {
    let finalRoute = AllRoutes?.map((singleRoute) => {
        return <Route key={singleRoute.path} path={singleRoute.path} element={singleRoute.element} />
    })
    return finalRoute
}

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar/>
                <ScrollToTop />
                <Routes>
                    {
                        renderRoutes()
                    }
                </Routes>
                <CartMenu/>
            </BrowserRouter>

        </div>
    );
}

export default App;
