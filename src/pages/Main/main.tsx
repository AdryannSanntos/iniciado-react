import { Header } from './../../components/Header/header';
import './css.css';
import{
  Input,
  Flex,
  Column
} from './css';
import { useCallback, useEffect, useState } from 'react';

export function Main(){
  const [title, setTitle] = useState<string[]>([]);
  const [desc, setDesc] = useState<string[]>([]);

  function saveRegister(){
    const productsArray = {
      Title : JSON.stringify(title),
      Desc : JSON.stringify(desc)
    };
    localStorage.setItem("produtos", JSON.stringify(productsArray));
  }

  function loadRegister(){
    const local = [JSON.parse(localStorage.getItem("produtos") || '')];
    local.forEach(element => {
      setTitle([...title, element.Title]);
      setDesc([...desc, element.Desc]);
      console.log(element);
      console.log(title);
      console.log(desc);
    });
  }
  useEffect(() =>{
    loadRegister()
  },[])
  return (
      <div>
        <Header/>
        <Flex>
          <Column>
            <Input value={title} onChange={event => setTitle([event.target.value])} type='text' placeholder='Insira o titulo do produto'/>
            <Input value={desc} onChange={event => setDesc([event.target.value])}  type='text' placeholder='Insira a descrição do produto'/>
            <input onClick={saveRegister} className="submit" type="submit" value="Cadastrar"/>
          </Column>
        </Flex>
      </div>
  );
}