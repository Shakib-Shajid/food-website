import Image from "next/image";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex gap-2">
        <Image src="/burger.png" className="hover:scale-95 translate-transform duration-500" alt="" width="700" height="700" />
        <Homepage />
      </div>
    </main>
  );
}


