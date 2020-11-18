import axios from 'axios'
import {address} from '../types'

const url_address = "https://viacep.com.br/ws/"

export const getAddressInfo = async (cep: number): Promise<address> =>{
    const result = await axios.get(`${url_address}${cep}/json`)

    return {
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    }
}
