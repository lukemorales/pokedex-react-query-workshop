import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    display: block;
    margin-top: -1.2rem;
  }
`;

export const Main = styled.main`
  max-width: 68rem;
  width: 100%;
  margin-top: 2.8rem;

  > ul {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    grid-gap: 1.6rem;
    list-style: none;
  }
`;

export const PokeCard = styled.li`
  > a,
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;
    height: 14.6rem;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.27);
    transition: 180ms ease-in-out;
    color: #232529;
    font-size: 1.6rem;

    :hover {
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.17);
      transform: translateY(-2px);
    }

    > img {
      width: 10rem;
      height: 10rem;
      object-fit: none;
    }
  }

  > div {
    > span {
      :first-of-type {
        margin: 0 0 2rem;
      }
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem 0 0;
  background: #fff;
  border-radius: 6px;
  padding: 1.2rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.27);

  > button {
    width: 15.8rem;
    padding: 0.8rem 2.8rem;
    border-radius: 4px;
    background: #2a74ba;
    color: #fff;
    transition: 180ms ease-in-out;

    :hover {
      background: #2c83d6;
    }

    :disabled {
      opacity: 0.5;
      cursor: default;
    }

    + button {
      margin-left: 1.6rem;
    }
  }
`;
