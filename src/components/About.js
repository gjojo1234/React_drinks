import Wrapper from "../wrappers/aboutWrapper";

const About = () => {
  return (
    <Wrapper>
      <div className="about">
        <h1>About</h1>
        <p style={{ width: "35rem", textAlign: "center", margin: " 0 auto" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et
          voluptates atque, illo doloribus repellat praesentium voluptate
          sapiente enim minima possimus eos, consectetur quisquam aperiam sint
          harum aut commodi provident.
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
