import React from 'react';
import {Title, Form, Repositories} from './styles';
import {FiChevronRight} from 'react-icons/fi';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {

 return (
   <>
    <img src={logo} alt="Github"/>
    <Title>Explore repositórios no Github</Title>

    <Form action="" >
      <input type="text" placeholder="Digite o nome do repositorio"/>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="">
        <img src="https://avatars3.githubusercontent.com/u/13895506?s=460&v=4" alt="Name"/>
        <div>
          <strong>github-repositories </strong>
          <p>Projeto do Bootcamp GoStack Rocketseat</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
      <a href="">
        <img src="https://avatars3.githubusercontent.com/u/13895506?s=460&v=4" alt="Name"/>
        <div>
          <strong>github-repositories </strong>
          <p>Projeto do Bootcamp GoStack Rocketseat</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
      <a href="">
        <img src="https://avatars3.githubusercontent.com/u/13895506?s=460&v=4" alt="Name"/>
        <div>
          <strong>github-repositories </strong>
          <p>Projeto do Bootcamp GoStack Rocketseat</p>
        </div>

        <FiChevronRight size={20}/>
      </a>

    </Repositories>
  </>
  )
};


export default Dashboard;
