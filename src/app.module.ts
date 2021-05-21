import { Module } from '@nestjs/common';
import { MoviesModuleModule } from './movies-module.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModuleModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}