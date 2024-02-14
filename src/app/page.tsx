import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex h-screen flex-col justify-center items-center space-y-4">
        <h1 className="text-7xl font-semibold">PLANIFY</h1>
        <p className="text-2xl font-light">Your personal event planner</p>
        <Button className="w-64 py-6">
          <Link href="/login" className="inline-flex items-center">
            Get Started <ChevronsRight /> 
          </Link>
        </Button>
      </div>
    </div>
  );
}
