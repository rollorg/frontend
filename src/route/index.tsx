import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import App from "../App";
import { Register } from "components/register/Register";
import { ForgotPassword } from "components/password/forgotPassword/ForgotPassword";
import { ResetPassword } from "components/password/resetPassword/ResetPassword";
import { FreeClient } from "components/user_page/free/Client";
import { FreePortrait } from "components/settings/profile/Portrait";
import { FreePatron } from "components/settings/account/Patron";
import { FreeGeneral } from "components/settings/public_page/General";
import { FreeWidget } from "components/settings/widget/Widget";
import { FreeSection } from "components/settings/category/Section";
import { FreeCrew } from "components/settings/team/Crew";
import { FreeScheme } from "components/settings/plan/Scheme";
import { FreeGDPR } from "components/settings/gdpr/GDPR";
import { FreeCost } from "components/settings/billing/Cost";
import { ProClient } from "components/user_page/pro/Client";
import { ProPortrait } from "components/settings/profile/Portrait";
import { ProPatron } from "components/settings/account/Patron";
import { ProGeneral } from "components/settings/public_page/General";
import { ProWidget } from "components/settings/widget/Widget";
import { ProSection } from "components/settings/category/Section";
import { ProCrew } from "components/settings/team/Crew";
import { ProScheme } from "components/settings/plan/Scheme";
import { ProGDPR } from "components/settings/gdpr/GDPR";
import { ProCost } from "components/settings/billing/Cost";

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
        <Route path="/free_client_portrait" element={<FreePortrait />} />
        <Route path="/free_client_portrait1" element={<FreePortrait />} />
        <Route path="/free_client_patron" element={<FreePatron />} />
        <Route path="/free_client_patron1" element={<FreePatron />} />
        <Route path="/free_client_general" element={<FreeGeneral />} />
        <Route path="/free_client_widegt" element={<FreeWidget />} />
        <Route path="/free_client_widegt1" element={<FreeWidget />} />
        <Route path="/free_client_section" element={<FreeSection />} />
        <Route path="/free_client_crew" element={<FreeCrew />} />
        <Route path="/free_client_scheme" element={<FreeScheme />} />
        <Route path="/free_client_gdpr" element={<FreeGDPR />} />
        <Route path="/free_client_cost" element={<FreeCost />} />

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
