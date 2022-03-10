import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import News from "./components/news/News";
import TodoList from "./components/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<TodoList />} />
        <Route path="/news" element={<News />}>
          <Route path="/news/:category" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
