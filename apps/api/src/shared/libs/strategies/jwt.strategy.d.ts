import { Strategy } from 'passport-jwt';
import JwtDto from '../dtos/jwt/jwt.dto';
import JwtPayloadDto from '../dtos/jwt/jwt.payload.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export default class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayloadDto): Promise<JwtDto>;
}
export {};
//# sourceMappingURL=jwt.strategy.d.ts.map