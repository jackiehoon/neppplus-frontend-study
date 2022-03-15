import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Bootstrap from "./components/bootstrap/Bootstrap";
import News from "./components/news/News";
import TodoList from "./components/TodoList";
import NaverMain from "./components/naver/pages/Main";
import NaverMovie from "./components/naver/pages/Movie";
import NaverBook from "./components/naver/pages/Book";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<TodoList />} />
        <Route path="/news" element={<News />}>
          <Route path="/news/:category" element={<News />} />
        </Route>
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/naver" element={<NaverMain />} />
        <Route path="/naver/movie" element={<NaverMovie />} />
        <Route path="/naver/book" element={<NaverBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
