import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (data.id) {
      const user = await prisma.siswa.findUnique({
        where: { id: data.id },
      });

      if (user) {
        return NextResponse.json({
          query: data,
          user,
        });
      } else {
        return NextResponse.json({
          query: data,
          user: "user not found",
        });
      }
    } else {
      return NextResponse.json({ message: "query not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: "server error" });
  }
}
