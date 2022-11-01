const addZeroToDigit = (num: number) => {
    if (num > 9) {
        return num.toString()
    }
    return `0${num}`
}

export default addZeroToDigit
