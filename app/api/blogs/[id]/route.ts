import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/db';
import Posts from '@/models/blog';
import { NextApiRequest } from 'next';


export async function GET(req: NextRequest, {params}: {params: {id: string}}){
    const { id } = params;
    await connectMongoDB();
    const post = await Posts.findOne({ _id: id });
    return NextResponse.json({ post }, { status: 200 });
}