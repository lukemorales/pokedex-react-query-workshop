import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.27);
  transition: 180ms ease-in-out;
  color: #232529;
  font-size: 1.4rem;
  overflow: hidden;
  position: relative;

  > button {
    position: absolute;
    left: 2rem;
    top: 2rem;
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    background: #2a74ba;
    box-shadow: 0 0px 4px rgba(13, 61, 106, 0.77);
    transition: 180ms ease-in-out;

    :hover {
      background: #2c83d6;
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(13, 61, 106, 0.27);
    }
  }

  > img {
    width: 18rem;
    height: 18rem;
  }
`;

export const PokeStats = styled.section`
  padding: 0 2rem 2.8rem;
  width: 100%;

  > ul {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 1.2rem;

    > li {
      color: #fff;
      border-radius: 1000px;
      padding: 0.2rem 2rem;
      font-size: 1.2rem;

      + li {
        margin-left: 0.8rem;
      }
    }
  }

  > table {
    width: 100%;

    td {
      overflow: hidden;
      position: relative;

      :first-child {
        width: 100%;

        :after {
          content: ' ...................................................................................... ';
          position: absolute;
          padding-left: 5px;
          opacity: 0.21;
        }
      }

      :not(:first-child) {
        text-align: right;
      }
    }
  }
`;

export const PokeFooter = styled.footer<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ color }) => color || '#fff'};
  color: #fff;
  padding: 2rem;

  > h1 {
    font-size: 1.6rem;
  }
`;
