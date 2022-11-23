import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Company } from 'src/company/schemas/company.schema';
import { Technology } from 'src/technology/schemas/technology.schema';

export type DriverDocument = HydratedDocument<Driver>;

@Schema()
export class Driver {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  age: number;

  @Prop()
  phone: string;

  @Prop({type: mongoose.Schema.Types.ObjectId,ref:'Company'})
  company_id:Company

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Technology'})
  technology_id:Technology

}

export const DriverSchema = SchemaFactory.createForClass(Driver);