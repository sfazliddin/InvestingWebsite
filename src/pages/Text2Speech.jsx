import Container from "../components/Container";
import ToAudio from "../components/ToAudio";
import UnderConstruction from "../components/UnderConstruction";

const Text2Speech = () => {
  return (
    <>
      <Container>
        <h1 className="d-flex justify-content-center">Text to Speech</h1>
        <ToAudio />
        <UnderConstruction />
      </Container>
    </>
  );
};
export default Text2Speech;
