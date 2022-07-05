import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { stringify } from 'querystring';
import { AuthService } from './auth.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';

const clientID = '993835927577317378';
const clientSecret =
  '941fbeefc51e42d90dcf281a7a0fc507436bb0a5259c87831cdea53495f186f4';
const callbackURL = 'http://localhost:8080/auth/discord';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(private authservice: AuthService, private http: HttpService) {
    super({
      authorizationURL: `https://discordapp.com/api/oauth2/authorize?${stringify(
        {
          client_id: clientID,
          redirect_uri: callbackURL,
          response_type: 'code',
          scope: 'identify',
        },
      )}`,
      tokenURL: 'https://discordapp.com/api/oauth2/token',
      clientID,
      clientSecret,
      callbackURL,
      scope: 'identify',
    });
  }

  async validate(accesToken: string): Promise<any> {
    const { data } = await firstValueFrom(
      this.http.get('https://discordapp.com/api/users/@me', {
        headers: { Authorization: `Bearer ${accesToken}` },
      }),
    );

    return this.authservice.findUserFromDiscordId(data);
  }
}
