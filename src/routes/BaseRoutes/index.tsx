import { HomePage } from "@/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { EquipmentsPage } from "@/pages/EquipmentsPage";
import { AvaliationPage } from "@/pages/AvaliationPage";
import { AvaliationConfirmPage } from "@/pages/AvaliationConfirmPage";
import { WhereSamplePage } from "@/pages/WhereSamplePage";
import { WhenSamplePage } from "@/pages/WhenSamplePage";
import { SampleExtractionPage } from "@/pages/SampleExtractionPage";
import { ConfigurationPage } from "@/pages/ConfigurationPage";
import { TermsPages } from "@/pages/TermsPages";
import { AvaliationFinalPage } from "@/pages/AvaliationFinalPage";
import { SampleFragmentationPage } from "@/pages/SampleFragmentationPage";
import { ScoreVessPage } from "@/pages/ScoreVessPage";
import { ManagementPage } from "@/pages/ManagementPage";
import { InformationPage } from "@/pages/InformationPage";
import { WhatIsVessPage } from "@/pages/WhatIsVessPage";
import { HistoryPage } from "@/pages/HistoryPage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/avaliation" element={<AvaliationPage />} />
          <Route path="/avaliationConfirm" element={<AvaliationConfirmPage />} />
          <Route path="/avaliationFinal" element={<AvaliationFinalPage />} />

          <Route path="/configuration" element={<ConfigurationPage />} />
          <Route path="/terms" element={<TermsPages />} />
           <Route path="/history" element={<HistoryPage />} />
          
          <Route path="/equipments" element={<EquipmentsPage />} />
          <Route path="/where" element={<WhereSamplePage />} />
          <Route path="/when" element={<WhenSamplePage />} />
          <Route path="/extraction" element={<SampleExtractionPage />} />
          <Route path="/fragmentation" element={<SampleFragmentationPage />} />
          <Route path="/score" element={<ScoreVessPage />} />

          <Route path="/management" element={<ManagementPage />} />
          <Route path="/info" element={<InformationPage />} />
          <Route path="/whatis" element={<WhatIsVessPage />} />
        </Route>
      </Routes>
    </>
  );
}
