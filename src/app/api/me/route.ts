import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Chonlakorn Sutthawet",
    studentId: "660610746",
  });
};
