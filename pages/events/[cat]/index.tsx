import Image from "next/image";
import Link from "next/link";

const EventIdPageCat = ({ data, pageName }: any) => {
  return (
    <div className="cat_events">
      <h1 className="text-[30px] font-bold">{`Upcomming Events of ${pageName}`}</h1>
      <div className="content">
        {data.map((ev: any) => {
          return (
            <Link
              className="card"
              href={`/events/${ev.city}/${ev.id}`}
              key={ev.id}
              passHref
            >
              <Image width={1000} height={300} alt={ev.title} src={ev.image} />
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
              <h1 className="text-[25px]">{ev.title}</h1>
              <p>{ev.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventIdPageCat;

export async function getStaticPaths() {
  const { events_categories } = await import("@/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("@/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
}
