export const encryptParam = (param) => {
    let encryptedMessage = ''
    for(let i = 0; i < param.length; i++) {
        let charCode = param.charCodeAt(i)
        charCode = charCode + 1 
        encryptedMessage += String.fromCharCode(charCode)
    }
    return encryptedMessage
}

export const decryptParam = (param) => {
    let decryptedMessage = ''
    for (let i = 0; i < param.length; i++) {
        let charCode = param.charCodeAt(i)
        charCode = charCode - 1
        decryptedMessage += String.fromCharCode(charCode)
    }
    return decryptedMessage
}
