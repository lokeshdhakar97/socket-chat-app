import connectMongoDB from "@/lib/db";
import User from "@/modal/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, chatUserId } = await request.json();
}

export async function GET(request: NextRequest) {
  const seachParams = request.nextUrl.searchParams;
  const email = seachParams.get("email");
  await connectMongoDB();
  const user = await User.findOne({ email });
  return NextResponse.json(user);
}
