<div align="center">

  <h1 align="center"><strong>🏆 NODE CHAMPIONS LEAGUE API</strong></h1>
  <p align="center">
    Uma API RESTful para gerenciar jogadores e clubes de futebol com dados de estatísticas detalhados.<br>
    Desenvolvida com <b>Node.js</b>, <b>Express</b> e <b>TypeScript</b>.
  </p>

</div>

<br />

  <!-- Badges -->
<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]
  [![Express.js][express-badge]][expressjs]

</div>

# 📋 Sobre o Projeto

Node Champions League é uma API que permite gerenciar informações sobre jogadores e clubes de futebol, incluindo suas estatísticas detalhadas como Overall, Attack, Defense, Passing, Dribbling e Physical. Esta API segue uma arquitetura bem estruturada com controladores, serviços, repositórios e modelos claramente separados.

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas:

- **Controllers**: Tratam as requisições HTTP e respostas
- **Services**: Contêm a lógica de negócio
- **Repositories**: Acessam os dados (neste caso, arquivos JSON)
- **Models**: Definem as interfaces e tipos dos dados
- **Utils**: Contêm funções auxiliares, como helpers HTTP

# 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### 📦 Dependências

- [typescript][typescript-npm] - Superset para desenvolvimento JavaScript em escala
- [tsx][tsx-npm] - TypeScript Execute (tsx): Permite que o Node.js execute TypeScript
- [tsup][tsup-npm] - Empacota sua biblioteca TypeScript sem configuração, usando esbuild
- [express][express-npm] - Framework web rápido, minimalista e não opinativo para Node.js
- [cors][cors-npm] - Middleware para habilitar CORS no Express

### 🔧 DevDependencies

- [@types/node][@types/node-npm] - Definições de tipo para Node.js
- [@types/express][@types/express-npm] - Definições de tipo para Express
- [@types/cors][@types/cors-npm] - Definições de tipo para CORS
### 📄 Arquivos de Configuração

- `.gitignore` - Ignora pastas como node_modules
- `.env` - Variáveis de ambiente
- `tsconfig.json` - Configura opções do TypeScript

# 🛣️ Rotas da API

## Jogadores

- **GET /api/players** - Lista todos os jogadores
- **GET /api/players/:id** - Obtém detalhes de um jogador por ID
- **POST /api/players** - Cria um novo jogador
- **DELETE /api/players/:id** - Remove um jogador
- **PATCH /api/players/:id** - Atualiza estatísticas de um jogador

## Clubes

- **GET /api/clubs** - Lista todos os clubes

### ⚡ Scripts

- `npm run dist`: Compila os arquivos TypeScript para JavaScript no diretório dist.
- `npm run start:dev`: Executa o servidor em modo de desenvolvimento com variáveis de ambiente carregadas do arquivo .env.
- `npm run start:watch`: Executa o servidor em modo de desenvolvimento com suporte para recarga automática quando os arquivos são alterados.
- `npm run start:dist`: Compila o projeto e executa a versão compilada do diretório dist.

# 👨‍💻 Como Usar

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) instalados em seu computador. Na linha de comando:

```bash
# Clone o repositório
$ git clone https://github.com/seu-usuario/node-champions-league

# Entre no repositório
$ cd node-champions-league

# Instale as dependências
$ npm install

# Execute em modo desenvolvimento
$ npm run start:dev
```

# 🔄 Fluxo de Dados

1. Cliente envia uma requisição HTTP para uma rota específica
2. O Controller recebe a requisição e extrai os dados necessários
3. O Controller chama o Service apropriado
4. O Service executa a lógica de negócio e interage com o Repository
5. O Repository acessa os dados e retorna o resultado
6. O Service processa o resultado e retorna um objeto de resposta HTTP padronizado
7. O Controller envia a resposta HTTP para o cliente

# 📊 Modelo de Dados

## Jogador (Player)
```typescript
{
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    age: number;
    statistics: {
        Overall: number;
        Attack: number;
        Defense: number;
        Passing: number;
        Dribbling: number;
        Physical: number;
    };
}
```

## Clube (Club)
```typescript
{
    id: number;
    name: string;
    country: string;
    league: string;
    founded: number;
    stadium: string;
    capacity: number;
    manager: string;
    players: string[];
}
```



[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[express-badge]: https://img.shields.io/badge/Express-5.1.0-green.svg
[nodejs]: https://nodejs.org/
[expressjs]: https://expressjs.com/
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
[@types/express-npm]: https://www.npmjs.com/package/@types/express
[express-npm]: https://www.npmjs.com/package/express
[cors-npm]: https://www.npmjs.com/package/cors
[@types/cors-npm]: https://www.npmjs.com/package/@types/cors
