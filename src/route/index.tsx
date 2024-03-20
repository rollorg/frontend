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
        <Route path="/register-e942d3" element={<Register />} />
        <Route path="/forgot_password-e942d1" element={<ForgotPassword />} />
        <Route path="/reset_password-e942d0" element={<ResetPassword />} />

        {/* FREE ROUTE */}
        <Route path="/free_client-e942d0" element={<FreeClient />} />
        <Route path="/free_client_portrait-e925d9" element={<FreePortrait />} />
        <Route path="/free_client_portrait1-e925d9" element={<FreePortrait />} />
        <Route path="/free_client_patron-e925d3" element={<FreePatron />} />
        <Route path="/free_client_patron1-e925d3" element={<FreePatron />} />
        <Route path="/free_client_general-e925d5" element={<FreeGeneral />} />
        <Route path="/free_client_widegt-e925d4" element={<FreeWidget />} />
        <Route path="/free_client_widegt1-e925d4" element={<FreeWidget />} />
        <Route path="/free_client_section-e925d7" element={<FreeSection />} />
        <Route path="/free_client_crew-e925d6" element={<FreeCrew />} />
        <Route path="/free_client_scheme-e925d1" element={<FreeScheme />} />
        <Route path="/free_client_gdpr-e925d8" element={<FreeGDPR />} />
        <Route path="/free_client_cost-e925d0" element={<FreeCost />} />

        {/* PRO ROUTE */}
        <Route path="/pro_client-e942d0" element={<ProClient />} />
        <Route path="/pro_client_portrait-e925d9" element={<ProPortrait />} />
        <Route path="/pro_client_portrait1-e925d9" element={<ProPortrait />} />
        <Route path="/pro_client_patron-e925d3" element={<ProPatron />} />
        <Route path="/pro_client_patron1-e925d3" element={<ProPatron />} />
        <Route path="/pro_client_general-e925d5" element={<ProGeneral />} />
        <Route path="/pro_client_widegt-e925d4" element={<ProWidget />} />
        <Route path="/pro_client_widegt1-e925d4" element={<ProWidget />} />
        <Route path="/pro_client_section-e925d7" element={<ProSection />} />
        <Route path="/pro_client_crew-e925d6" element={<ProCrew />} />
        <Route path="/pro_client_scheme-e925d1" element={<ProScheme />} />
        <Route path="/pro_client_gdpr-e925d8" element={<ProGDPR />} />
        <Route path="/pro_client_cost-e925d0" element={<ProCost />} />
      </Routes>
    </>
  );
};
