import { NextResponse } from 'next/server';

export async function GET() {
 try {
   return NextResponse.json({
    hello: "world",
  });
  } catch (error) {
    throw error
  }
}