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

export async function POST(req: Request, res: Response) {
  try {
    await connectMongoDB();
    const post = await Posts.create(req.body);
    if (!post) {
      return NextResponse.json({ message: 'Post not created' });
    }
    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error creating post', error);
    return NextResponse.json({ error: 'Error creating post' });
  }

}