import { Routes, Route } from "react-router-dom";
import { Comment } from "./pages/Comments/index";
import { EditPage } from "./pages/Comments/edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Comment />} />
        <Route path="/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
