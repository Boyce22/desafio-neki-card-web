import { PublicRoutes } from "./public.routes";
import { PrivateRoutes } from "./private.routes";
import { useAuth } from "../hooks/useAuth";

export function AppRoutes() {

    const { authenticated } = useAuth();
    return (
        <>
            {authenticated ? <PrivateRoutes /> : <PublicRoutes />}
        </>
    );
}