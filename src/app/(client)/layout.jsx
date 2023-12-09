import Sidebar from "@/components/Sidebar"
import ModalComponent from "@/components/ModalComponent"
import Pasos from "@/components/Pasos"
import { ToastContainer } from "react-toastify"
import ToastProvider from "@/components/ToastProvider"

export const metadata = {
    title: 'Quiosco App',
    description: 'Quiosco app es una app para gestionar un quiosco',
}

export default function RootLayout({ children }) {

    return (
        <>
            <ToastProvider>
                <div className='md:flex'>
                    <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                        <Sidebar />
                    </aside>
                    <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                        <div className='p-10'>
                            <Pasos />
                            {children}
                        </div>
                    </main>
                </div>
                <div id='modal'>
                    <ModalComponent />
                </div>
            </ToastProvider>
        </>
    )
}

