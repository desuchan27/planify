
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}


export default async function Layout({ children }: LayoutProps ) {

    const session = await getServerSession()
    if (!session) {
        redirect('/login');
    }

    return (
        <div>
            {children}
        </div>
    )
}