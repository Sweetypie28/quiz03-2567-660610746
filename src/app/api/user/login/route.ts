import jwt from "jsonwebtoken";

import { DB, readDB } from "@lib/DB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  readDB();

return NextResponse.json(
     {
      ok: false,
     message: "Username or Password is incorrect",
     },
   { status: 400 }
 );

  const token = jwt.sign(
    { roomId:user.roomId, }
  )

  return NextResponse.json({ ok: true, token });
};
