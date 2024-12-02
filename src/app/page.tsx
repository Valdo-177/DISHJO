"use client"
import MyAnimationComponent from "@/components/ui/myAnimation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <MyAnimationComponent>
        <div className="flex flex-col justify-center items-center">
          <h1>This is <strong>DISHJO</strong></h1>
          <Link href='/menu' className="underline">Go to menu</Link>
        </div>
      </MyAnimationComponent>
    </div>
  );
}
