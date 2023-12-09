import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../(client)/AdminLayout";

export const metadata = {
    title: "Admin - Quiosco App",
    description: "Administrador de Quiosco App, podras gestionar tus pedidos",
}

export default function Layout({ children }) {
    return (
        <AdminLayout>
            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                    <Image
                        width={300}
                        height={100}
                        src="/assets/img/logo.svg"
                        alt="imagen logotipo"
                    />
                </aside>
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                        {children}
                    </div>
                </main>
            </div>
            <ToastContainer />
        </AdminLayout>
    );
}