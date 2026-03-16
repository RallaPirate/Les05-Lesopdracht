import Link from "next/link";
import { getPolls } from "@/lib/data";
import type { Poll } from "@/types";

export const dynamic = "force-dynamic";

export default function HomePage() {
  // STAP 2: Haal alle polls op met getPolls()
  // Dit is een Server Component — je kunt gewoon functies aanroepen!
  const polls = getPolls();
  const totalVotes = (poll: Poll): number =>
    poll.votes.reduce((sum, v) => sum + v, 0);
  return (
    <>
    <h1>Test</h1>
    <section className="space-y-4">
  {polls.map((poll) => (
    <Link key={poll.id} href={`/poll/${poll.id}`}
    className="block bg-white rounded-xl border p-6 py-4 space-y-4 hover:border-purple-300"
    >
    <h2 className="text-lg font-semibold">{poll.question}</h2>
    <div className="text-sm text-gray-500">
    {poll.options.length} opties · {totalVotes(poll)} stemmen
    </div>
    { poll.options.map((option, index) => (<span key = {index} className="bg-gray-50 rounded-xl px-4">{option}</span>))}
    </Link>
    ))}
    </section>
    </>
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
