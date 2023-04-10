export default function validaIdade(campo) {
    const dataNascimento = campo.value.split('-')
    const dataAtual = new Date()
    
    // const diaValido = validaDia(dataNascimento[2], dataNascimento[1], dataNascimento[0], dataAtual)
    
    if (validaAno(dataNascimento[0], dataAtual) && validaMes(dataNascimento[1], dataAtual) && validaDia(dataNascimento[2], dataAtual)) {
        console.log('Maior de Idade')
    } else {
        console.log('Menor de Idade')
    }
    
    // if (diaNascimento > diaAtual && mesNascimento >= mesAtual && anoNascimento >= anoAtual - 18) {
        //     console.log('Menor de idade!')
        //     return
        // }
        // console.log('Maior de idade')
        
}
    
function validaDia(diaNascimento, dataAtual) {
    const diaAtual = dataAtual.getDate()
    
    console.log(diaNascimento + ' | ' + diaAtual)
    
    if (diaNascimento <= diaAtual) {
        return true
    }
    return false
}

function validaMes(mesNascimento, dataAtual) {
    const mesAtual = dataAtual.getMonth() + 1

    console.log(mesNascimento + ' | ' + mesAtual)

    if (mesNascimento <= mesAtual) {
        return true
    }
    return false
}

function validaAno(anoNascimento, dataAtual) {
    const anoAtual = dataAtual.getFullYear()

    console.log(anoNascimento + ' | ' + (anoAtual - 18))

    if (anoNascimento <= anoAtual - 18) {
        return true
    }
    return false
}