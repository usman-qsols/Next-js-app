import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }: any) => {
  return (
    <main className="home_body">
      {data.map((ev: any) => {
        return (
          <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
            <div className="image">
              <Image src={ev.image} alt="" width={500} height={200} />
            </div>
            <div className="content">
              <h1 className="text-[25px]">{ev.title}</h1>
              <p className="text-green-400">{ev.description}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
};
