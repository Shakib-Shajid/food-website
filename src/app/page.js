import Image from "next/image";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h3>Create food website</h3>
        <Homepage />
    </main>
  );
}


