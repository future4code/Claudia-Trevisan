import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types';


export const expiresIn = "1min"

export const generateToken = (payload: AuthenticationData): string =>{
    const token = jwt.sign({
        id: payload.id,
        role: payload.role
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token
};

export const getTokenData = (token: string): AuthenticationData =>{
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
};

export const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
};