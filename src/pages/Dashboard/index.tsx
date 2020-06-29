import React, { FunctionComponent } from 'react';

import Logo from '../../assets/logo.svg';

import {
  Brand,
  Title,
  Form,
  Input,
  Button,
  Repositories,
  Repository,
  Content,
  Avatar,
  Info,
  RepositoryName,
  Description,
  RightArrowIcon,
} from './styles';

const Dashboard: FunctionComponent = () => (
  <>
    <Brand src={Logo} alt="GitHub Explorer" />
    <Title>Explore repositórios no GitHub</Title>
    <Form>
      <Input placeholder="Digite o nome do repositório" />
      <Button>Pesquisar</Button>
    </Form>
    <Repositories>
      <Repository href="test">
        <Content>
          <Avatar
            src="https://avatars2.githubusercontent.com/u/20667377?v=4"
            alt="Avatar"
          />
          <Info>
            <RepositoryName>
              joel-fragoso/05-primeiro-projeto-react
            </RepositoryName>
            <Description>Lorem ipsum</Description>
          </Info>
        </Content>
        <RightArrowIcon size={20} />
      </Repository>
      <Repository href="test">
        <Content>
          <Avatar
            src="https://avatars2.githubusercontent.com/u/20667377?v=4"
            alt="Avatar"
          />
          <Info>
            <RepositoryName>
              joel-fragoso/05-primeiro-projeto-react
            </RepositoryName>
            <Description>Lorem ipsum</Description>
          </Info>
        </Content>
        <RightArrowIcon size={20} />
      </Repository>
      <Repository href="test">
        <Content>
          <Avatar
            src="https://avatars2.githubusercontent.com/u/20667377?v=4"
            alt="Avatar"
          />
          <Info>
            <RepositoryName>
              joel-fragoso/05-primeiro-projeto-react
            </RepositoryName>
            <Description>Lorem ipsum</Description>
          </Info>
        </Content>
        <RightArrowIcon size={20} />
      </Repository>
    </Repositories>
  </>
);

export default Dashboard;
