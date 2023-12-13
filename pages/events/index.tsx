import Image from "next/image";
import Link from "next/link";

const Index = ({ data }: any) => {
  return (
    <div>
      <div className="events_page">
        {data.map((ev: any) => {
          return (
            <Link href={`/events/${ev.id}`} key={ev.id} legacyBehavior passHref>
              <a href={`/events/${ev.id}`}>
                <a className="card">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    width={500}
                    height={500}
                  />{" "}
                  <h2>{ev.title} </h2>
                </a>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const { events_categories } = await import("@/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
};
