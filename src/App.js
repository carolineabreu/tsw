import { Routes, Route } from "react-router-dom";
import { Comment } from "./pages/Comments/index";
import { CreateComments } from "./pages/Comments/form";
import { EditPage } from "./pages/Comments/edit";
import { CommentPage } from "./pages/Comments/delete";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Comment />} />
        <Route path="/" element={<CreateComments />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/delete/:id" element={<CommentPage />} />
      </Routes>
    </div>
  );
}

export default App;
