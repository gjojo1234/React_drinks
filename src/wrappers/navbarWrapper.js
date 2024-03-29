import styled from "styled-components";

const Wrapper = styled.nav`
  .navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 15vh;
    background: linear-gradient(0deg, rgb(239, 231, 231), rgb(136, 136, 240));
  }
  .title {
    font-size: 2.5rem;
    padding: 5rem;
    color: rgb(225, 73, 167);
    letter-spacing: 0.1rem;
  }
  .menu {
    font-size: 2.2rem;
    position: relative;
    padding: 2rem;
    color: rgba(60, 60, 170, 0.7);
  }
  .lists {
    position: absolute;
    top: 10vh;
    right: 0;
    width: 10rem;
    height: auto;
    display: none;
    grid-template-columns: 1fr;

    background: rgb(190, 190, 240);
    border-radius: 0.5rem;
    animation: menuAnim 300ms linear;
  }

  @keyframes menuAnim {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .link {
    padding-left: 1.5rem;
    padding-top: 0.5rem;
    font-weight: 500;
    font-size: 1.5rem;
    text-decoration: none;
    color: rgba(60, 60, 170, 0.7);
  }
  .link:nth-last-child(1) {
    padding-bottom: 0.5rem;
  }
  .link:hover {
    color: rgba(60, 60, 170, 0.9);
  }
  .list-show {
    display: grid;
  }
  .menu:hover {
    cursor: pointer;
    color: rgba(60, 60, 170, 0.9);
  }

  @media screen and (min-width: 600px) {
    .menu-icon {
      display: none;
    }
    .lists {
      position: static;
      display: flex;
      justify-content: flex-end;
      width: 50vw;
      height: 10vh;
      top: 0;
      background: transparent;
    }
  }
`;

export default Wrapper;
