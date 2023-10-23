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
import { Widget } from "../components/free/settings/widget/Widget";
import { Section } from "../components/free/settings/category/Section";
import { Crew } from "../components/free/settings/team/Crew";
import { Scheme } from "../components/free/settings/plan/Scheme";
import { GDPR } from "../components/free/settings/gdpr/GDPR";
import { Cost } from "../components/free/settings/billing/Cost";

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
        <Route path="/free_client_portrait1" element={<Portrait />} />
        <Route path="/free_client_patron" element={<Patron />} />
        <Route path="/free_client_patron1" element={<Patron />} />
        <Route path="/free_client_general" element={<General />} />
        <Route path="/free_client_widegt" element={<Widget />} />
        <Route path="/free_client_widegt1" element={<Widget />} />
        <Route path="/free_client_section" element={<Section />} />
        <Route path="/free_client_crew" element={<Crew />} />
        <Route path="/free_client_scheme" element={<Scheme />} />
        <Route path="/free_client_gdpr" element={<GDPR />} />
        <Route path="/free_client_cost" element={<Cost />} />
      </Routes>
    </>
  );
};
