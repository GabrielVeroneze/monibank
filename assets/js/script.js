import validaCPF from "./valida-cpf.js"
import validaIdade from "./valida-idade.js"

const camposDoFormulario = document.querySelectorAll('[required]')

const formulario = document.querySelector('[data-formulario]')

// O evento 'submit' ocorre quando o usuário clicar no botão de envio do formulário
formulario.addEventListener('submit', (e) => {
    // Cancela a ação padrão do evento 'submit' (recaregamento da página)
    e.preventDefault()

    // Objeto que contém propriedades que correspondem aos campos do formulário, atribui os valores desses campos às propriedades do objeto 
    const listaRespostas = {
        // A expressão 'e.target.elements['x'].value' é usada para acessar o valor do campo de entrada de um formulário
        nome: e.target.elements['nome'].value,
        email: e.target.elements['email'].value,
        rg: e.target.elements['rg'].value,
        cpf: e.target.elements['cpf'].value,
        aniversario: e.target.elements['aniversario'].value,
    }

    // Armazena o objeto 'listaRespostas' no armazenamento local do navegador usando o localStorage. A chave é 'cadastro' e o valor é o objeto convertido em uma string JSON
    localStorage.setItem('cadastro', JSON.stringify(listaRespostas))

    // Redireciona o usuário para a página que contem a segunda parte da criação de conta
    window.location.href = './abrir-conta-form-2.html'
})

camposDoFormulario.forEach(campo => {
    campo.addEventListener('blur', () => verificaCampo(campo))
    campo.addEventListener('invalid', evento => evento.preventDefault())
})

// Tipos de erros que podem ser encontrados em um campo
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

// Mensagens de erro personalizadas para cada tipo de erro de cada campo do formulário.
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    // A mensagem de erro é inicializada como uma string vazia
    let mensagem = ''
    // O customError personalizado do campo é limpo usando o método 'setCustomValidity()' com uma string vazia
    campo.setCustomValidity('')

    // Verifica se o campo que perde o foco é o de 'cpf', e verifica se o campo tem 11 caracteres (minimo de caracteres de um CPF)
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        validaCPF(campo)
    }
    // Verifica se o campo que perde o foco é o de 'cpf', e se o valor do campo não está vazio
    if (campo.name == 'aniversario' && campo.value != '') {
        validaIdade(campo)
    }

    // Percorre todos os tipos de erros que podem ser encontrados em um campo, armazenados no array 'tiposDeErro' 
    tiposDeErro.forEach(erro => {
        // verifica se o campo possui o tipo de erro especificado pela variável 'erro'
        if (campo.validity[erro]) {
            // Obtem a mensagem de erro correspondente ao campo em que ocorreu o erro e ao tipo de erro específico.
            mensagem = mensagens[campo.name][erro]
        }
    })

    exibeMensagemDeErro(campo, mensagem)
}

function exibeMensagemDeErro(campo, mensagem) {
    // Elemento HTML que será usado para exibir a mensagem de erro
    const mensagemDeErroSpan = campo.parentElement.querySelector('.mensagem-erro')

    // Verifica se o campo do formulário é válido ou não
    if (!campo.checkValidity()) {
        // Se o campo for inválido, ou seja, se pelo menos um tipo de erro ocorreu, a mensagem de erro será exibida no elemento HTML 
        mensagemDeErroSpan.textContent = mensagem
    } else {
        // Se o campo for válido, a mensagem de erro será removida, limpando a propriedade "textContent" do elemento HTML
        mensagemDeErroSpan.textContent = ''
    }
}
