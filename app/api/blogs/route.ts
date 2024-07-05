import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/db';
import Posts from '@/models/blog';

export async function GET() {
  try {
    await connectMongoDB();
    const posts = await Posts.find();
    if (!posts) {
      return NextResponse.json({ message: 'Posts not found' });
    }
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error getting posts', error);
    return NextResponse.json({ error: 'Error getting posts' });
  }
}
