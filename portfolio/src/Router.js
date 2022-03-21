import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import TodoList from "./components/pages/TodoList";
import Youtube from "./components/pages/Youtube";
import YoutubeWatch from "./components/pages/YoutubeWatch";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/youtube/:videoId" element={<YoutubeWatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
