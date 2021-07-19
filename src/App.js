import React from 'react'

//import Products from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';

import { Products, Navbar } from './components';

const App = () => {
    return (
        <div>
            E-commerce
            <Navbar />
            <Products />
        </div>
    )
}

export default App;