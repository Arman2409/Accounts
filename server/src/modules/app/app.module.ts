import { Module } from '@nestjs/common';
import { AccountsModule } from '../accounts/accounts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AccountsModule, MongooseModule.forRoot(process.env.DATABASE_URL)],
  controllers: [],
  providers: [],
})

export class AppModule {}
