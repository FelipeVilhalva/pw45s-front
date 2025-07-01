import { HomePage } from "@/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { EquipmentsPage } from "@/pages/EquipmentsPage";
import { AvaliationPage } from "@/pages/AvaliationPage";
import { AvaliationConfirmPage } from "@/pages/AvaliationConfirmPage";
import { WhereSamplePage } from "@/pages/WhereSamplePage";
import { WhenSamplePage } from "@/pages/WhenSamplePage";
import { SampleExtractionPage } from "@/pages/SampleExtractionPage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/avaliation" element={<AvaliationPage />} />
          <Route path="/avaliationConfirm" element={<AvaliationConfirmPage />} />
          
          <Route path="/equipments" element={<EquipmentsPage />} />
          <Route path="/where" element={<WhereSamplePage />} />
          <Route path="/when" element={<WhenSamplePage />} />
          <Route path="/extraction" element={<SampleExtractionPage />} />
        </Route>
      </Routes>
    </>
  );
}
