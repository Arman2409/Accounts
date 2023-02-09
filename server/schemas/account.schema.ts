import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {

  @Prop({ unique: true})
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true })
  createdOn: Date;
}

export const AccountSchema = SchemaFactory.createForClass(Account);