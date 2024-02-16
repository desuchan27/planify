import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
    const session = await getServerSession();
    if (!session) {
        redirect('/login');
    }

    return (
        <>
            <div className="flex flex-col h-screen">
                <div className='flex flex-row flex-grow'>
                    <div className='hidden sm:flex sm:w-1/3 md:w-1/4 h-full'>
                        <Sidebar />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <Navbar />
                        <div className="relative flex-grow">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
