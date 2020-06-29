import React, {
  FunctionComponent,
  useState,
  useEffect,
  FormEvent,
} from 'react';

import Logo from '../../assets/logo.svg';
import api from '../../services/api';

import {
  Brand,
  Title,
  Form,
  Input,
  Button,
  Error,
  Repositories,
  Repository,
  Content,
  Avatar,
  Info,
  RepositoryName,
  Description,
  RightArrowIcon,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: FunctionComponent = () => {
  const [inputError, setInputError] = useState('');
  const [newRepository, setNewRepository] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GitHubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <Brand src={Logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handleAddRepository}>
        <Input
          hasError={!!inputError}
          value={newRepository}
          onChange={(event) => setNewRepository(event.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <Button type="submit">Pesquisar</Button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <Repository
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <Content>
              <Avatar
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <Info>
                <RepositoryName>{repository.full_name}</RepositoryName>
                <Description>{repository.description}</Description>
              </Info>
            </Content>
            <RightArrowIcon size={20} />
          </Repository>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
