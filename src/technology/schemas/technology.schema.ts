import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {Builders} from 'src/builder/schemas/builder.schema'
import { Company } from 'src/company/schemas/company.schema';
export type TechnologyDocument = HydratedDocument<Technology>;

@Schema()
export class Technology {
  @Prop()
  technology_name: string;

  @Prop()
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Builders' })
  builder_id: Builders;

  @Prop({type: mongoose.Schema.Types.ObjectId,ref:'Company'})
  company_id:Company
}

export const TechnologySchema = SchemaFactory.createForClass(Technology);