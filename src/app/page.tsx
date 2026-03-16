import Link from "next/link";
import { getPolls } from "@/lib/data";
import type { Poll } from "@/types";

export const dynamic = "force-dynamic";

export default function HomePage() {
  // STAP 2: Haal alle polls op met getPolls()
  // Dit is een Server Component — je kunt gewoon functies aanroepen!
  const polls = getPolls();

  return (
  <h1>"Test"</h1>
  )
        /*
          STAP 2: Map over de polls en toon voor elke poll:
          - De vraag (poll.question)
          - Het aantal opties en stemmen
          - De opties als tags/badges
          - Wrap het in een <Link> naar /poll/{poll.id}

          Tip: maak een helper functie voor het totaal aantal stemmen:
          const totalVotes = (poll: Poll): number =>
            poll.votes.reduce((sum, v) => sum + v, 0);
        */
       
}
