import { Routes, Route } from "react-router-dom";
import { Comment } from "./pages/Comments/index";
import { Form } from "./pages/Comments/form";
import { EditPage } from "./pages/Comments/edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Comment />} />
        <Route path="/form" element={<Form />} />
        <Route path="/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
