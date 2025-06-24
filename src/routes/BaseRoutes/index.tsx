import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/old_pages/LoginEquipmentsPage";
import { UserSignupPage } from "@/pages/old_pages/UserSignupPage";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { CategoryListPage } from "@/pages/old_pages/CategoryListPage";
import { EquipmentsPage } from "@/pages/EquipmentsPage";
import { AvaliationPage } from "@/pages/AvaliationPage";
import { ProductFormPage } from "@/pages/old_pages/ProductFormPage";
import { ProductListPageV2 } from "@/pages/old_pages/ProductListPageV2";
import { ProductFormPageV2 } from "@/pages/old_pages/ProductFormPageV2";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/avaliation" element={<AvaliationPage />} />
          
          <Route path="/equipments" element={<EquipmentsPage />} />
        </Route>
      </Routes>
    </>
  );
}
