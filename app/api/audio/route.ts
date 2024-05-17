import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("@request", request.body);
  return new NextResponse(JSON.stringify({ abo: "ba" }), {
    status: 200,
  });
}
