import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import JwtDto from '../dtos/jwt/jwt.dto';
import JwtPayloadDto from '../dtos/jwt/jwt.payload.dto';
import { jwtConstants } from '../dtos/jwt/jwt.constant';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async validate(payload: JwtPayloadDto): Promise<JwtDto> {
    return {
      id: payload.id,
      username: payload.username,
    };
  }
}
