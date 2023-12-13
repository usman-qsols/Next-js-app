import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useRef, useState } from "react";

const EventIdPage = ({ data }: any) => {
  const inputEmail: any = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const emailValue = inputEmail?.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (e) {
      console.log("ERROR", e);
    }
  };
  console.log(data);
  return (
    <div className="event_single_page">
      <div>
        <h1 className="text-[2.5rem]">{data.title}</h1>
      </div>
      <div className="flex flex-col justify-center text-center">
        <Image src={data.image} alt="" width={1100} height={500} />
        <h1 className="text-[1.5rem]">{data.title}</h1>
        <p className="text-[1.1rem]">{data.description}</p>

        <form onSubmit={onSubmit} className="email_registration">
          <label> Get Registered for this event!</label>
          <input
            ref={inputEmail}
            type="email"
            id="email"
            placeholder="Please insert your email here"
          />
          <button type="submit"> Submit</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default EventIdPage;

type AllEventsData = {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[] | null | any;
};

export async function getStaticPaths() {
  const data = await import("@/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path: any) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("@/data/data.json");
  const eventData = allEvents.find((ev) => id === ev.id);

  return {
    props: { data: eventData },
  };
}
