// Nessa classe vamos fazer a configuração do prory para fazer a comunicação entre a Api e o front-end. Basica ele vai
// funionar como ser eu tivesse no mesmo dominio fazendo a comunicação entre o front-end e o back-end.
// Devemos fazer isso, pois não temos acesso diretamente de outra api, pois vai dar um erro de cors esse erro nos indica que
// estamos tentando acessar uma api de outro dominio. Então para fazer essa comunicação vamos fazer uma configuração
// no proxy.
// Se tivesemos acesso sem configura um proxy e gente poderia
// acessar qualque api que qualque site o seria um grande problema de segurança. Então para fazer essa comunicação vamos
// fazer uma configuração no proxy.


const PROXY_CONFIG = [
  {
    context: ['/api'],  // Sempre que eu fizer um \api o angular vai redirecionar para o localhost
    target: 'http://localhost:8080/',
    secure: false,  // Isso será ativado quando o sistema entrar em produção (Isso seria o https)
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
