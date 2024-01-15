import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import App from "../App";
import { Register } from "components/register/Register";
import { ForgotPassword } from "components/password/forgotPassword/ForgotPassword";
import { ResetPassword } from "components/password/resetPassword/ResetPassword";
import { FreeClient } from "components/user_page/free/Client";
import { Portrait } from "components/settings/profile/Portrait";
import { Patron } from "components/settings/account/Patron";
import { General } from "components/settings/public_page/General";
import { Widget } from "components/settings/widget/Widget";
import { Section } from "components/settings/category/Section";
import { Crew } from "components/settings/team/Crew";
import { Scheme } from "components/settings/plan/Scheme";
import { GDPR } from "components/settings/gdpr/GDPR";
import { Cost } from "components/settings/billing/Cost";
import { ProClient } from "components/user_page/pro/Client";
import { ProPortrait } from "components/settings/profile/ProPortrait";
import { ProPatron } from "components/settings/account/ProPatron";
import { ProGeneral } from "components/settings/public_page/ProGeneral";
import { ProWidget } from "components/settings/widget/ProWidget";
import { ProSection } from "components/settings/category/ProSection";
import { ProCrew } from "components/settings/team/ProCrew";
import { ProScheme } from "components/settings/plan/ProScheme";
import { ProGDPR } from "components/settings/gdpr/ProGDPR";
import { ProCost } from "components/settings/billing/ProCost";

export const Router: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />

        {/* FREE ROUTE */}
        <Route path="/free_client" element={<FreeClient />} />
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

        {/* PRO ROUTE */}
        <Route path="/pro_client" element={<ProClient />} />
        <Route path="/pro_client_portrait" element={<ProPortrait />} />
        <Route path="/pro_client_portrait1" element={<ProPortrait />} />
        <Route path="/pro_client_patron" element={<ProPatron />} />
        <Route path="/pro_client_patron1" element={<ProPatron />} />
        <Route path="/pro_client_general" element={<ProGeneral />} />
        <Route path="/pro_client_widegt" element={<ProWidget />} />
        <Route path="/pro_client_widegt1" element={<ProWidget />} />
        <Route path="/pro_client_section" element={<ProSection />} />
        <Route path="/pro_client_crew" element={<ProCrew />} />
        <Route path="/pro_client_scheme" element={<ProScheme />} />
        <Route path="/pro_client_gdpr" element={<ProGDPR />} />
        <Route path="/pro_client_cost" element={<ProCost />} />
      </Routes>
    </>
  );
};
