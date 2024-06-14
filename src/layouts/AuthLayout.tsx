import Logo from "@/components/Logo";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export default function AuthLayout() {
  const { data, isLoading } = useAuth();
  if (isLoading) return "Cargando...";
  if (data) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <div className="py-5 mx-auto sm:w-[500px]">
          <Logo />
          <div className="m-5 sm:m-10">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        autoClose={8000}
      />
    </>
  );
}
