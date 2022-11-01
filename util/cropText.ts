const cropText = (text: string, amount: number) => {
    if (text.length > amount) {
        return `${text.slice(0, amount)}...`
    }
    return text
}

export default cropText
