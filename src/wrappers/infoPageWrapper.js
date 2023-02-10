import styled from "styled-components";

const Wrapper = styled.section`
  .infoPage {
    position: fixed;
    z-index: 10;
    width: 60%;
    height: 70%;

    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color: rgb(76, 139, 195);
    border-radius: 1em;
    box-shadow: 0em 0em 1.5em rgb(20, 67, 103);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  h1 {
    color: pink;
    font-size: 2.5em;
  }

  img {
    width: 40%;
    height: 50%;
    border-radius: 1em;
  }

  .cancelBtn {
    background-color: transparent;
    color: rgba(255, 0, 0, 0.871);
    font-size: 3em;
    font-weight: 700;
    border: transparent;
    position: absolute;
    top: 0.075em;
    right: 0.2em;
  }
  .cancelBtn:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default Wrapper;
