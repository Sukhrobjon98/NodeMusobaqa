import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { RolesService } from './roles.service';
import { Role } from './schemas/role.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Role.name, schema: Role }])],
  providers: [RolesService]
})
export class RolesModule {}
