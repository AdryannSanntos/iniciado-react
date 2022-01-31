import { Header } from './../../components/Header/header';
import './css.css';
import{
  Input,
  Flex,
  Column
} from './css';
import { useState } from 'react';

export function Main(){
  const [title, setTitle] = useState<string[]>([]);
  const [desc, setDesc] = useState<string[]>([]);
  return (
    <div>
      <Header/>
      <Flex>
        <Column>
          <Input value={title} onChange={event => setTitle([event.target.value])} type='text' placeholder='Insira o titulo do produto'/>
          <Input value={desc} onChange={event => setDesc([event.target.value])}  type='text' placeholder='Insira a descrição do produto'/>
          <input className="submit" type="submit" value="Cadastrar"/>
        </Column>
      </Flex>
    </div>
  );
}