import React, { FunctionComponent } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: FunctionComponent = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={Logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} /> voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/20667377?v=4"
            alt="Joel Fragoso"
          />
          <div>
            <strong>Joel</strong>
            <p>descricao</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="/">
          <div>
            <strong>Texto</strong>
            <p>Descricao</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
