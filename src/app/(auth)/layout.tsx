import { redirect } from "next/navigation";
import Header from "./components/Header";
import Image from "next/image";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession()
    
    if (session && session.user) {
        redirect('/dashboard');
    }

  return (
    <>
      <Header />
      <div className="flex h-screen w-full">
        <div className="w-full md:w-2/4 lg:w-1/4 flex justify-center items-center">
          <div className="w-full">{children}</div>
        </div>
        <div className="md:w-3/5 lg:w-3/4 relative">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/authbg.webp"
              alt="laptop in desk in high angle view with coffee and person"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
