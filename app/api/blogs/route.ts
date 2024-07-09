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

export async function POST(req: Request) {
  try {
      const reqBody = await req.json();
      console.log("Request body:", reqBody);

      const { title, body } = reqBody;
      console.log("Parsed title and description:", { title, body });

      if (!title || !body) {
          return NextResponse.json({ message: 'Title and description are required' }, { status: 400 });
      }

      await connectMongoDB();
      console.log("Connected to MongoDB");

      const newTodo = await Posts.create({ title, body });
      console.log("New todo created:", newTodo);

      return NextResponse.json({ message: 'Post Created', todo: newTodo }, { status: 201 });
  } catch (error) {
      console.error('Error creating todo:', error);
      return NextResponse.json({ message: 'Failed to create Post' }, { status: 500 });
  }
}