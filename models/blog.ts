import mongoose, { Document, Model, Schema } from 'mongoose';

interface IPost extends Document {
  title: string;
  body: string;
  category: string;
  likes: number;
  tags: string[];
  date: Date;
  _id: string; 
}

const postSchema: Schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  category: { type: String, required: true },
  likes: { type: Number, default: 0 },
  tags: { type: [String] },
  date: { type: Date, default: Date.now }
});

const Posts: Model<IPost> = mongoose.models.Posts || mongoose.model<IPost>('Posts', postSchema);

export default Posts;
export type { IPost };
