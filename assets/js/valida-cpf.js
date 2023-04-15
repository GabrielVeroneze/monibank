export default function validaCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, '')

    // Verifica se o CPF contém números repetidos ou se um dos dois dígitos verificadores são não são válidos
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        // Define uma mensagem de erro personalizada
        campo.setCustomValidity('Esse CPF não é valido.')
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

    // Determina se 'numerosRepetidos' contém o valor de 'cpf', retornando true se tiver ou false se não tiver
    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0
    let multiplicador = 10

    // Multiplica os 9 primeiros numeros do cpf
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador
        multiplicador--
    }

    soma = (soma * 10) % 11

    // Se o resto da divisão for 10 ou 11, é tranformado para 0
    if (soma == 10 || soma == 11) {
        soma = 0
    }

    // Retorna se o resto da divisão é diferente do primeiro digito verificador
    return soma != cpf[9]
}

function validaSegundoDigito(cpf) {
    let soma = 0
    let multiplicador = 11

    // Multiplica os 9 primeiros numeros do cpf + o primeiro digito verificador
    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador
        multiplicador--
    }

    soma = (soma * 10) % 11

    // Se o resto da divisão for 10 ou 11, é tranformado para 0
    if (soma == 10 || soma == 11) {
        soma = 0
    }

    // Retorna se o resto da divisão é diferente do segundo digito verificador
    return soma != cpf[10]
}