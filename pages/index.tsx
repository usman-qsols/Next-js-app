import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { HomePage } from "@/src/components/home/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  return (
    <main className="flex justify-center items-center flex-col">
      <HomePage data={data} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const { events_categories } = await import("@/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
};
