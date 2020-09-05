import mongoose from 'mongoose';
import { prop, Ref } from '@typegoose/typegoose';
import { modelOptions } from '@typegoose/typegoose';
import { User } from '../users/User';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Session {
  public _id: mongoose.Types.ObjectId;

  @prop({ unique: true })
  public refreshToken: string;

  @prop({ ref: User })
  user: Ref<User>;
}
