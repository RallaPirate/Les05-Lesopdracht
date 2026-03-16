import { notFound } from "next/navigation";
import { getPollById } from "@/lib/data";
import VoteForm from "@/components/VoteForm";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

// STAP 5: generateMetadata — dynamische pagina titel
//
// Deze functie genereert de <title> tag voor SEO.
// Haal de poll op en return de vraag als titel.
// Als de poll niet bestaat, return "Poll niet gevonden".

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const poll = getPollById(id);

  return {
    title: poll ? `${poll.question} — QuickPoll` : "Poll niet gevonden",
  };
}

// STAP 5: PollPage — de poll detail pagina
//
// Wat moet je doen?
// 1. Haal het id op uit params
// 2. Zoek de poll met getPollById(id)
// 3. Als de poll niet bestaat: roep notFound() aan
// 4. Render de poll vraag als <h1>
// 5. Render de <VoteForm poll={poll} /> component

export default async function PollPage({ params }: PageProps) {
  // Jouw code hier...
  return (
    <div className="max-w-2xl mx-auto">
      <p>Implementeer deze pagina (zie stap 5 in de opdracht)</p>
    </div>
  );
}
