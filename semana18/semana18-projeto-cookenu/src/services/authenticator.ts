import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types';

const expiresIn = "24h"

export const generateToken = (payload: AuthenticationData): string =>{
    const token = jwt.sign({
        id: payload.id,
        email: payload.email
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
    return token
};

export const getTokenData = (token: string): AuthenticationData =>{
    return jwt.verify(
        token,
        process.env.JWT_KEY as string,
    ) as AuthenticationData
};