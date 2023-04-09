export default function validaCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, '')

    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        // console.log('Esse cpf não existe!')
    } else {
        // console.log('Esse cpf existe!');
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    // Determina se 'numerosRepetidos' contém o valor de 'cpf', retornando true ou false apropriadamente
    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0
    let multiplicador = 10

    // Multiplica os 9 primeiros numeros do cpf 
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador
        console.log(`${cpf[tamanho]} x ${multiplicador} = ${cpf[tamanho] * multiplicador}`)
        multiplicador--
    }

    console.log(soma)

    soma = (soma * 10) % 11

    // Se o resto da divisão for 10 ou 11, é tranformado para 0
    if (soma == 10 || soma == 11) {
        soma = 0
    }

    console.log(soma)
    console.log(soma != cpf[9])
    console.log('\t\t')

    // Retorna se o resto da divisão é igual o primeiro digito verificador
    return soma != cpf[9]
}

function validaSegundoDigito(cpf) {
    let soma = 0
    let multiplicador = 11

    // Multiplica os 9 primeiros numeros do cpf + o primeiro digito verificador 
    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador
        console.log(`${cpf[tamanho]} x ${multiplicador} = ${cpf[tamanho] * multiplicador}`)
        multiplicador--
    }

    console.log(soma)
    soma = (soma * 10) % 11

    // Se o resto da divisão for 10 ou 11, é tranformado para 0
    if (soma == 10 || soma == 11) {
        soma = 0
    }

    console.log(soma)
    console.log(soma != cpf[10])

    // Retorna se o resto da divisão é igual o segundo digito verificador
    return soma != cpf[10]
}