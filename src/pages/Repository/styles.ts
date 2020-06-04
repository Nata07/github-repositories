import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-right: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      strong {
        display: block;
        font-size: 32px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }

      & + li {
        margin-left: 80px;
      }
    }
  }
`;


export const Issues = styled.div`
  margin-top: 80px;

  a{
    background: #fff;
    border-radius: 5px;
    width: 100%;
    display: block;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translate(10px);
    }

    div {
      margin-left: 16px;
      flex: 1;
      strong {
        font-size: 26px;
        color: #3d3d4d;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbc6
    }
  }

`;
