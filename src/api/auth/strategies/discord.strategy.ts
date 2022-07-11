import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-discord';
import { stringify } from 'querystring';
import { AuthService } from '../auth.service';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authservice: AuthService,
    private http: HttpService,
    private readonly config: ConfigService,
  ) {
    super({
      clientID: config.get<string>('CLIENT_ID'),
      clientSecret: config.get<string>('CLIENT_SECRET'),
      callbackURL: config.get<string>('CALLBACK_URL'),
      scope: ['identify', 'guilds'],
    });
  }
  private readonly logger = new Logger(DiscordStrategy.name);

  async validate(
    accesToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<any> {
    const { username, discriminator, id, avatar } = profile;
    this.logger.log(username, discriminator, id, avatar);
  }
}
