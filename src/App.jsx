import { Routes, Route } from "react-router-dom";
import { ErrorLayout, MainLayout } from "./components";
import { Home, Detail, NotFound } from "./pages";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
      <Route path="*" element={<ErrorLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App 