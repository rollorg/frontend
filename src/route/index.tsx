import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import App from "../App";
import { Register } from "../components/register/Register";
import { FreeClient } from "../components/free/user_page/Client";
import { ProClient } from "../components/pro/user_page/Client";
import { Portrait } from "../components/free/settings/profile/Portrait";
import { Patron } from "../components/free/settings/account/Patron";
import { General } from "../components/free/settings/public_page/General";

export const Router: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/free_client" element={<FreeClient />} />
        <Route path="/pro_client" element={<ProClient />} />
        <Route path="/free_client_portrait" element={<Portrait />} />
        <Route path="/free_client_patron" element={<Patron />} />
        <Route path="/free_client_general" element={<General />} />
      </Routes>
    </>
  );
};
