import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as redis from 'redis';
import * as connectRedis from 'connect-redis';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  console.log(`Running app in ${config.get<string>('ENVIRONMENT')} mode`);
  const PORT = config.get<number>('PORT') || 3333;
  const client = redis.createClient({
    legacyMode: true,
    url: process.env.REDIS_URI,
  });
  client.connect().catch(console.error);
  client.on('connect', () => console.log('Connected to Redis'));
  client.on('error', console.error);
  const RedisStore = connectRedis(session);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(
    session({
      cookie: {
        maxAge: 86400000,
      },
      secret: 'oknsdfaizbdaubazdubazdblqksn',
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({ client: client as any }),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(PORT);
}
bootstrap();
