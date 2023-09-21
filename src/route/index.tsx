import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import App from "../App";
import { Register } from "../components/register/Register";

export const Router: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
