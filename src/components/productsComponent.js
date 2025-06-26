import '../App.css'
import { Routes, Route, Link } from 'react-router-dom';
import FashionComponent from './fashionComponent';



function Products () {
    return (
        <div>

            <div className="category">
                <div className='category-routes'>
                    <Link style={{'textDecoration': 'none', 'padding': '20px'}} to='/fashion'>FASHION</Link>
                </div>
                <div className='category-routes'>
                    <Link  style={{'textDecoration': 'none', 'padding': '20px'}} to='/travel'>TRAVEL</Link>
                </div>
                <div className='category-routes'>
                    <Link  style={{'textDecoration': 'none', 'padding': '20px'}} to='/every-day'>EVERY DAY</Link>
                </div>
                <div className='category-routes'>
                    <Link  style={{'textDecoration': 'none', 'padding': '20px'}} to='/miniatures'>MINIATURES</Link>
                </div>
            </div>
            
            <Routes>
                <Route path='/fashion' element={<FashionComponent/>}/>
                <Route path='/travel'/>
                <Route path='/every-day'/>
                <Route path='/miniatures'/>
            </Routes>
            
        </div>
    )
}

export default Products