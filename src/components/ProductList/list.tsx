import { useEffect, useState } from "react";
import {
  Container,
  Text,
  Title,
  Product
} from './css.jsx';
export function ListProducts(){
  interface IProducts {
    key: number;
    title: string;
    desc: string;
  }
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() =>{
    async function loadProducts(){
      const productsStorage = await localStorage.getItem("@products");
      if(productsStorage){
        setProducts(JSON.parse(productsStorage));
      }
    }
    loadProducts();
    console.log(products);
  },[])

  useEffect(() =>{
    async function saveProduct(){
      await localStorage.setItem("@products", JSON.stringify(products));
    }
    saveProduct();
  },[products])

  return (
    <Container>
      {products.map((e, id) =>{
        return (
            <Product>
              <Title>{e.title}</Title>
              <Text>{e.desc}</Text>
            </Product>
        );
      })}
    </Container>
  );
}