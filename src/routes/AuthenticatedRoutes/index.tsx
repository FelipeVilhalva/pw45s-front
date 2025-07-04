import { NavBar } from "@/components/NavBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";


export function AuthenticatedRoutes() {
    const isAuthenticated = true;
    const location = useLocation();
    return (
        isAuthenticated ? (
            <div style={{display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <NavBar />
                <div style={{flex: "1", paddingTop: "80px", backgroundColor: "#e3d8ae"}}>
                    <Outlet />
                </div>
            </div>
        ) : (
            <Navigate to="/login" state={{from: location}} replace/>
        )
    );
}