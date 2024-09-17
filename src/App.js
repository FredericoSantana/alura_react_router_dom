import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route index element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="posts/:id" element={<Post/>}/>
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
