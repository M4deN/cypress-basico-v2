# Documentação do Projeto Cypress Básico v2

## Descrição do Projeto

O repositório "cypress-basico-v2" contém a versão 2 do curso básico de Cypress da Escola Talking About Testing. O objetivo deste projeto é fornecer um ambiente de aprendizado para automação de testes utilizando a ferramenta Cypress.io.

## Pré-requisitos

Para utilizar este projeto, é necessário ter os seguintes softwares instalados:

- Node.js
- npm (Node Package Manager)
- Git

## Instalação

Siga os passos abaixo para configurar o ambiente:

1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/M4deN/cypress-basico-v2.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd cypress-basico-v2
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```
## Conteúdo Abordado

- Como configurar um projeto Cypress do zero ✔️
- Como visitar páginas locais e remotas ✔️
- Como lidar com os elementos mais comuns encontrados em aplicações web ✔️
- Como testar _upload_ de arquivos ✔️
- Como realizar as mais diversas verificações de resultados esperados ✔️
- Como criar comandos customizados ✔️
- Como lidar com links que abrem em outra aba do navegador ✔️
- Como rodar testes simulando as dimensões de um dispositivo móvel ✔️
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents) ✔️
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes) ✔️
- Como criar uma documentação mínima para seu projeto de testes automatizados ✔️

## Rodando os Testes modo interativo

Para executar os testes no ambiente de desktop modo interativo, utilize o seguinte comando:

```bash
npm run cy:open
```

### Testes no Desktop modo Headlesss

Para executar os testes no ambiente de desktop modo headless, utilize o seguinte comando:

```bash
npm test
```

Este comando irá executar os testes no Cypress em sua configuração padrão.

### Testes em Dispositivos Móveis

Para executar os testes em um emulador de dispositivo móvel, utilize o seguinte comando:

```bash
npm run test:mobile
```

Este comando irá abrir o Cypress em uma configuração específica para dispositivos móveis.

## Arquivos de Teste

Atualmente, o projeto conta com os seguintes arquivos de teste:

1. `CAC-TAT.spec.js`
2. `privacy.spec.js`


## Contato

Para mais informações ou suporte, entre em contato com o autor do projeto:

- Nome: Alecio L. Medeiros
- Email: alexdesaran@gmail.com

## CI (Integração Contínua)

O projeto utiliza GitHub Actions para execução de testes automatizados em ambientes de integração contínua. A configuração do fluxo de trabalho pode ser encontrada no arquivo `.github/workflows`:

### Arquivo: .github/workflows/main.yml

```yaml
name: End-to-end tests 🧪

`````
## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.