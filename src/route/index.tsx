import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import App from "../App";
import { Register } from "components/register/Register";
import { FreeClient } from "components/user_page/Client";
import { Portrait } from "components/settings/profile/Portrait";
import { Patron } from "components/settings/account/Patron";
import { General } from "components/settings/public_page/General";
import { Widget } from "components/settings/widget/Widget";
import { Section } from "components/settings/category/Section";
import { Crew } from "components/settings/team/Crew";
import { Scheme } from "components/settings/plan/Scheme";
import { GDPR } from "components/settings/gdpr/GDPR";
import { Cost } from "components/settings/billing/Cost";

export const Router: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/client" element={<FreeClient />} />
        <Route path="/client_portrait" element={<Portrait />} />
        <Route path="/client_portrait1" element={<Portrait />} />
        <Route path="/client_patron" element={<Patron />} />
        <Route path="/client_patron1" element={<Patron />} />
        <Route path="/client_general" element={<General />} />
        <Route path="/client_widegt" element={<Widget />} />
        <Route path="/client_widegt1" element={<Widget />} />
        <Route path="/client_section" element={<Section />} />
        <Route path="/client_crew" element={<Crew />} />
        <Route path="/client_scheme" element={<Scheme />} />
        <Route path="/client_gdpr" element={<GDPR />} />
        <Route path="/client_cost" element={<Cost />} />
      </Routes>
    </>
  );
};
