import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request, {params:{id}} : {params:{id:string}}){
    const body = await req.json();
    const res = await prisma.user.findUnique({where:{username:body.username,password:body.password}});
    return NextResponse.json({data:res, status:200});
}