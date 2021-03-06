import React, {useState, FormEvent, useEffect} from 'react';
import {Title, Form, Repositories, Error} from './styles';
import {FiChevronRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubRepositories');

    if(storageRepositories) {
      return JSON.parse(storageRepositories)
    }else{
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubRepositories',
      JSON.stringify(repositories),
      );
  }, [repositories])
  async function handleAddReposirory(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo) {
     return setInputError('Digite o autor/nome do repositorio');
    }
    try {

      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
      console.log(newRepo);
    }catch(err){
      setInputError('erro na busca por esse repositorio');
    }
  }

 return (
   <>
    <img src={logo} alt="Github"/>
    <Title>Explore repositórios no Github </Title>

    <Form hasError={!! inputError} onSubmit={handleAddReposirory} >
      <input
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o nome do repositorio"/>
      <button type="submit">Pesquisar</button>
    </Form>

    {inputError && <Error> {inputError}</Error>}

    <Repositories>
     {repositories.map(repository => (
      <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
        <div>
          <strong>{repository.full_name} </strong>
          <p>{repository.description}</p>
        </div>

        <FiChevronRight size={20}/>
      </Link>
     ))}
    </Repositories>
  </>
  )
};


export default Dashboard;
