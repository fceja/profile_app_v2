import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "@components/App";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
