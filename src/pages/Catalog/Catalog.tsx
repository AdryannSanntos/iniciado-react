import { ListProducts } from '../../components/ProductList/list';
import { Header } from './../../components/Header/header';

export function Catalog(){
  return (
    <div>
      <Header/>
      <ListProducts />
    </div>
  );
}