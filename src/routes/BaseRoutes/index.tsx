import { HomePage } from "@/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { EquipmentsPage } from "@/pages/EquipmentsPage";
import { AvaliationPage } from "@/pages/AvaliationPage";
import { AvaliationConfirmPage } from "@/pages/AvaliationConfirmPage";

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
        </Route>
      </Routes>
    </>
  );
}
