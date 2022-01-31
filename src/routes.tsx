import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Catalog } from './pages/Catalog/Catalog';
import { Main } from './pages/Main/main';

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/catalog" element={<Catalog />}/>
      </Routes>
    </Router>
  )
}