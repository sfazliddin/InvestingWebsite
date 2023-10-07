import { Routes, Route } from "react-router-dom";
// import "bootswatch/dist/zephyr/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Text2Speech from "./pages/Text2Speech";
import MyNavbar from "./components/navbar";
import Support from "./pages/Support";
import { Container } from "react-bootstrap";
import Numbers from "./pages/Numbers";
import NotFound from "./pages/NotFound";
import ChuckNorris from "./pages/ChuckNorris";
import UrbanDictionary from "./pages/UrbanDictionary";

function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/text2speech" element={<Text2Speech />} />
          <Route path="/numbers-facts" element={<Numbers />} />
          <Route path="/chuck-norris" element={<ChuckNorris />} />
          <Route path="/urban-dictionary" element={<UrbanDictionary />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
