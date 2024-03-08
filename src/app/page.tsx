import MainMoneyCard from "@/components/main/MainMoneyCard";
import NameCard from "@/components/main/NameCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen bg-[#FFFAF2] flex-col ">
      <NameCard name="주영민" />
      <MainMoneyCard />
    </main>
  );
}
