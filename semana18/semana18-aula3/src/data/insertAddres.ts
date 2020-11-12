import {connection} from '../index'
import { address } from '../types'

export const insertAddressWithComplement = async (
    id: string,
    numero: number,
    address: address,
    complement: string
): Promise<void> =>{
    await connection.insert({
        id: id,
        logradouro: address.logradouro,
        numero: numero,
        complemento: complement,
        bairro: address.bairro,
        cidade: address.cidade,
        estado: address.estado
    }).into('address')
};

export const insertAddress = async (
    id: string,
    numero: number,
    address: address,
): Promise<void> =>{
    await connection.insert({
        id: id,
        numero: numero,
        logradouro: address.logradouro,
        bairro: address.bairro,
        cidade: address.cidade,
        estado: address.estado
    }).into('address')
}