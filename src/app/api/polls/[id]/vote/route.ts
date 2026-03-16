import { NextResponse } from "next/server";
import { votePoll } from "@/lib/data";

interface RouteParams {
  params: Promise<{ id: string }>;
}

interface VoteBody {
  optionIndex: number;
}

// STAP 4: POST /api/polls/[id]/vote — stem uitbrengen
//
// Wat moet je doen?
// 1. Haal het id op uit params
// 2. Lees de request body (request.json()) en cast naar VoteBody
// 3. Valideer: is optionIndex een number?
// 4. Roep votePoll(id, body.optionIndex) aan
// 5. Als het resultaat undefined is: return 404
// 6. Anders: return de geüpdatete poll als JSON

export async function POST(
  request: Request,
  { params }: RouteParams
): Promise<NextResponse> {
  // Jouw code hier...
  return NextResponse.json({ error: "Nog niet geimplementeerd" }, { status: 501 });
}
