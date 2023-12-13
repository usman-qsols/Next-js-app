import Image from "next/image";

const Index = ({ data }: any) => {
  return (
    <div>
      <h1>Comming Events</h1>
      <div>
        {data.map((ev: any) => {
          return (
            <a href={`/events/${ev.id}`} key={ev.id}>
              <Image src={ev.image} alt="" width={200} height={100} />
              <h1>{ev.title}</h1>
            </a>
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
