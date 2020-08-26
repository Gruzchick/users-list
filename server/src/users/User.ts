import * as mongoose from 'mongoose';
import { prop } from '@typegoose/typegoose';

export class User {
  public _id: mongoose.Types.ObjectId;

  @prop({ required: true, unique: true })
  public email: string;

  @prop({ required: true })
  public password: string;
}
