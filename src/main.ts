import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //appmodule로 시작=rootmodule of everything
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted:true,
    transform : true,//데이터타입변환
  }
  ));//validationpipe는 유효성검사를 해줌 validate해준다
    
  await app.listen(3000);
}
bootstrap();
