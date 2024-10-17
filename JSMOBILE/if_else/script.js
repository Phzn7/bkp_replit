/**
 * Funçoes sao blocos que podem ser reotilizados
 * funçoes poem ou nao receber parametros
 * funçoes podem ou nao retornar valores ou nao
 * funçoes podem ser anonimas 
 */
function dizOla() {
  alert('Ola');
}
function dizOla() {
  alert('ola,' + nome)
}
function olapessoa(nome) {
  alert('Olá, ' + nome)
}
function dizOla() {
  alert('ola,' + nome)
}
const nome = 'Vitor '
const sobrenome = ' silva '
const idade = 20

function dadosPessoa() {
  const dados = nome + sobrenome + idade
  console.log(dados)
}
//invocaçao de funçao 
dizOla()
olapessoa('PEDRO')
olapessoa('MARIA')
olapessoa('kaua')

dadosPessoa()