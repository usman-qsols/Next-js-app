import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  return (
    <main className="flex justify-center items-center flex-col">
      <header>
        <div className="flex justify-between flex-row">
          <a className="p-2" href="/">
            Home
          </a>
          <a className="p-2" href="/events">
            Events
          </a>
          <a className="p-2" href="/about-us">
            About us
          </a>
        </div>
      </header>

      <main>
        {data.map((ev: any) => {
          return (
            <a href={`/events/${ev.id}`} key={ev.id}>
              <Image src={ev.image} alt="" width={200} height={20} />
              <h1 className="text-[25px]">{ev.title}</h1>
              <p>{ev.description}</p>
            </a>
          );
        })}
      </main>
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
