export const verifyAge = (birthDate: string) =>{
    const today: Date = new Date();
    const [day, month, year] = birthDate.split("/");
    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);
    const ageMilisseconds: number = today.getTime() - dateOfBirth.getTime();
    const ageInYears: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365;

    return ageInYears
}

export type extract = {
    value: number,
    date: string,
    description: string
}

export type account = {
    name: string,
    cpf: number,
    birth: string,
    balance: number,
    extract: extract[]
}

export const clients: account[] = [
    {
        name: "Claudia Oliveira",
        cpf: 55547522200,
        birth: "06/10/1987",
        balance: 100.000,
        extract: [
            {
                value: 50.00,
                date: "22/10/2020",
                description: "Debito compra lojinha"
            },
            {
                value: 150.00,
                date: "12/10/2020",
                description: "Debito compra cinema"
            },
        ]
    },
    {
        name: "Vanessa Rangel",
        cpf: 55544231200,
        birth: "09/11/1991",
        balance: 100.00,
        extract: [
            {
                value: 40.00,
                date: "02/10/2020",
                description: "Debito compra lojinha"
            },
            {
                value: 20.00,
                date: "21/10/2020",
                description: "Debito compra padaria"
            },
        ]
    },
]