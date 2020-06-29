import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';
import { FiChevronRight } from 'react-icons/fi';

interface InputProps {
  hasError: boolean;
}

export const Brand = styled.img``;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  color: #3a3a3a;

  max-width: 450px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;
`;

export const Input = styled.input<InputProps>`
  flex: 1;

  height: 70px;

  padding: 0 24px;

  border: 2px solid #fff;
  border-radius: 5px 0 0 5px;

  ${(props) =>
    props.hasError &&
    css`
      border: 2px solid #c53030;
      border-right: 0;
    `}

  color: #3a3a3a;

  ::placeholder {
    color: #a8a8b3;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 70px;

  background-color: #04d361;

  border: 0;
  border-radius: 0 5px 5px 0;

  font-weight: bold;
  color: #fff;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#04d361')};
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;

  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

export const Repository = styled(Link)`
  width: 100%;

  background-color: #fff;
  border-radius: 5px;

  padding: 24px;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;

  border: 0;
  border-radius: 50%;

  flex-shrink: 0;
`;

export const Info = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

export const RepositoryName = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #a8a8b3;

  margin-top: 4px;
`;

export const RightArrowIcon = styled(FiChevronRight)`
  color: #cbcbd6;
`;
