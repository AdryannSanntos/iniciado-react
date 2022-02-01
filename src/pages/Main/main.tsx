import { Header } from './../../components/Header/header';
import './css.css';
import{
  Input,
  Flex,
  Column
} from './css';
import { useEffect, useState } from 'react';

export function Main(){
  interface IProducts {
    key: number;
    title: string;
    desc: string;
  }
  const [products, setProducts] = useState<IProducts[]>([]);
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();
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

  function productsAdd(){
    if (!title || !title.trim()) return;
    if (!desc || !desc.trim()) return;

    const data : IProducts = {
      key: Math.random() * 100 + 0,
      title: title,
      desc: desc
    };

    setProducts([...products, data]);
    localStorage.setItem("@products", JSON.stringify(products));
    setDesc("");
    setTitle("");
    alert('Cadastrado com sucesso!');
    console.log(products);
    
  }

  return (
      <div>
        <Header/>
        <Flex>
          <Column>
            <Input value={title} onChange={text => setTitle(text.target.value)} type='text' placeholder='Insira o titulo do produto'/>
            <Input value={desc} onChange={text => setDesc(text.target.value)}  type='text' placeholder='Insira a descrição do produto'/>
            <input onClick={productsAdd} className="submit" type="submit" value="Cadastrar"/>
          </Column>
        </Flex>
      </div>
  );
}