import styled from "styled-components";

const Wrapper = styled.section`
  .h1Home {
    margin-top: 0.5rem;
    font-size: 2.5rem;
    text-align: center;
    color: rgb(236, 48, 48);
  }
  .containers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
  }
  .container {
    margin: 1.5rem;
    width: 16rem;
    height: 23rem;
    background-color: rgb(186, 235, 220);
    border-radius: 2rem;
    display: grid;
  }
  .containerTitle {
    margin: 1rem auto;
    text-align: center;
    color: rgb(60, 55, 200);
  }
  .containerImage {
    display: block;
    margin: 0 auto;
    width: 14rem;
    height: 11rem;
    border-radius: 1rem;
  }
  .containerButton {
    display: block;
    margin: 1rem auto;
    padding: 0 0.8rem;
    border-radius: 0.8rem;
    background-color: rgb(89, 233, 190);
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    color: rgb(60, 55, 200);
  }
  .containerButton:hover {
    transform: scale(1.05);
    cursor: pointer;
    color: rgb(13, 6, 203);
  }
`;

export default Wrapper;
