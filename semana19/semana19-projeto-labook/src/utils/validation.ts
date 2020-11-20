export const validation = (body: {}): void =>{
    const bodyNames: string[] = Object.keys(body);
    const bodyValues: string[] = Object.values(body);

    for(let i = 0; i < bodyValues.length; i++){
        if(!bodyValues[i]){
            throw new Error(`"${bodyNames[i]}" deve ser preenchido`)
        }
    }
};