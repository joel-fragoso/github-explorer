import React, { FunctionComponent, useState, FormEvent } from 'react';
import api from '../../services/api';

import Logo from '../../assets/logo.svg';

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
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
          <Repository key={repository.full_name} href="test">
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
