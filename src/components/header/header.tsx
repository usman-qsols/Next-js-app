import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="topNav">
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="title"> Sed ut perspiciatis unde omnis</p>
    </header>
  );
};
