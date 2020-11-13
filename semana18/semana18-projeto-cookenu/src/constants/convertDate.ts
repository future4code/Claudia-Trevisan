// export const convertDate = (): string =>{
//     const now: Date = new Date();

//     const today: string = now.getDate().toString();

//     const day = (today.length === 1) ? '0' +today : today;

//     const month: string = (now.getMonth() + 1).toString();

//     const MonthOfYear = (month.length === 1) ? '0' +month : month;

//     const year: string = now.getFullYear().toString();

//     return `${year}-${MonthOfYear}-${day}`
// };

export const transformDate = (date: Date): string | undefined => {
    const createdAt = date.toString();
    const data = createdAt.slice(4, 15);

    let [month, day, year] = data.split(' ');
    
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    
    for (let i = 0; i <= 11; i++){
        if(month === months[i]){
            let newMonth = i + 1

            return `${day}/${newMonth}/${year}`
        }
    }
};

export function convertDateFormatToUser(date: Date): string {
    const day = "" + date.getDate();
    const month = "" + (date.getMonth() + 1);
    const year = date.getFullYear();
    const newDate = `${day}/${month}/${year}`;
    return newDate;
};


