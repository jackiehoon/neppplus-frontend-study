import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import TodoList from "./components/pages/TodoList";
import Youtube from "./components/pages/Youtube";
import YoutubeWatch from "./components/pages/YoutubeWatch";
import InstaLogin from "./components/pages/insta/Login";
import InstaSignup from "./components/pages/insta/Signup";
import InstaMain from "./components/pages/insta/Main";
import InstaDirect from "./components/pages/insta/Direct";
import TopNav from "./components/organisms/insta/TopNav";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/youtube/:videoId" element={<YoutubeWatch />} />
        <Route path="/insta" element={<TopNav />}>
          <Route path="/insta/main" element={<InstaMain />} />
          <Route path="/insta/direct" element={<InstaDirect />} />
          <Route path="/insta/profile">
            <Route path="/insta/profile" />
            <Route path="/insta/profile/saved" />
            <Route path="/insta/profile/tagged" />
          </Route>
        </Route>
        <Route path="/insta/login" element={<InstaLogin />} />
        <Route path="/insta/signup" element={<InstaSignup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
