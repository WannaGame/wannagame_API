import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticatedGuard, DiscordAuthGuard } from '../guards';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  /**
   * GET /api/auth/login
   * Route sur laquelle le client va taper pour s'authentifier
   */
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  /**
   * GET /api/auth/redirect
   * URL de redirection sur laquelle le Provider OAuth2 va rediriger
   */
  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:8080/auth/discord?isAuthenticated=true');
  }

  /**
   * GET /api/auth/status
   * permet de récupérer le status de l'authentification
   */
  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request) {
    return req.user;
  }

  /**
   * GET /api/auth/logout
   * y'a vraiment besoin d'expliquer là ?
   */
  @Get('logout')
  @UseGuards(AuthenticatedGuard)
  logout(@Req() req: Request) {
    req.logOut(() => this.logger.log(`logging out ${req.user}`));
  }
}
