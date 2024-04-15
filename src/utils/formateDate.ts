const formatDate = (date: string): string => {
    const dateFormated = new Date(date);
    const day = dateFormated.getDay() > 9 ? dateFormated.getDay()  : `0${dateFormated.getDay()}`;
    const month = dateFormated.getMonth() + 1  > 9 ? dateFormated.getMonth() + 1  : `0${dateFormated.getMonth() + 1}`;
    const year = dateFormated.getFullYear();

    return `${day}/${month}/${year}`
}

export default formatDate;