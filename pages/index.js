import { useState } from "react";
import Link from "next/link";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = [
    "Ada Lovelace",
    "Grace Hopper",
    "Margaret Hamilton",
    "Bob Lee",
  ];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>

      <h3>
        Read <Link href="/posts/first-post">this page!</Link>
      </h3>
    </div>
  );
}
