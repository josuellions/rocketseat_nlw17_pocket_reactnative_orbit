### CURSO - Rocketseat - NLW 17 - Pocket

#### Data: 09/09/2024 a 12/09/2024

##### Developer: Josuel A. Lopes

#### About

Desenvolvimento acadêmico de uma aplicação front-end Mobile com React Native, conceitos de integração com API REST, para o gerenciamento metas pessoais diária de atividades e bem-estar com interação, com registro de metas e progresso semanal.

Utilizando as tecnologias:

- React Native
- TypeScript,
- Expo Go
- Lucide react native,

--

<!-- - TanStack Query
- React hook form,
- Tailwind CSS,
- Radix
- Biome,
- ZOD
- Dayjs -->

<br/>

#### Projeto: in.orbit - Rocketseat NLW17 Pocket Mobile React Native

</br>

#### 📋 Sumário

---

- [📋 Sumário](#-sumário)
- [📂 Arquitetura e diretórios](#-arquitetura-e-diretórios)
- [📦 Pacotes](#-pacotes)
- [🧰 Dependências](#-dependências)
- [♻️ Variáveis de Ambiente](#-variáveis-de-ambiente)
- [🔥 Como executar](#-como-executar)
- [📑 Padronização](#-padronização)
- [🧪 Testes](#-testes)
- [⚙️ CI/CD](#-CI/CD)
- [🚀 Build](#-build)
- [🔖 Version](#-version)
- [📜 Licença](#-licença)

<br/>

#### 📂 Arquitetura e diretórios

---

- MVC (Model View Controller)

```txt
  📦 root
  ┣ 📂 mobile
  ┃ ┣ 📂 .vscode
  ┃ ┃ ┗ 📜 settings.json
  ┃ ┃
  ┃ ┣ 📂 .expo
  ┃ ┃ ┣ 📂 types
  ┃ ┃ ┣ 📜 devices.json
  ┃ ┃ ┗ 📜 README.md
  ┃ ┃
  ┃ ┣ 📂 assets
  ┃ ┃ ┗ 📂 images
  ┃ ┃   ┣ 📜 adaptive-icon.png
  ┃ ┃   ┣ 📜 favicon.png
  ┃ ┃   ┣ 📜 icon.png
  ┃ ┃   ┗ 📜 splash-icon.png
  ┃ ┃
  ┃ ┣ 📂 src
  ┃ ┃ ┣ 📂 app
  ┃ ┃ ┃ ┣ 📜 _layout.tsx
  ┃ ┃ ┃ ┗ 📜 index.tsx
  ┃ ┃ ┃
  ┃ ┃ ┣ 📂 assets
  ┃ ┃ ┃ ┣ 📜 lets-start-illustration.svg
  ┃ ┃ ┃ ┗ 📜 logo-in-orbit.svg
  ┃ ┃ ┃
  ┃ ┃ ┣ 📂 components
  ┃ ┃ ┃ ┣ 📂 ui
  ┃ ┃ ┃ ┃ ┣ 📜 button.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 dialog.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 input.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 label.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 outline-button.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 progress-bar.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 radio-group.tsx
  ┃ ┃ ┃ ┃ ┗ 📜 separator.tsx
  ┃ ┃ ┃ ┃
  ┃ ┃ ┃ ┣ 📂 loading
  ┃ ┃ ┃ ┃ ┣ 📜 styles.ts
  ┃ ┃ ┃ ┃ ┗ 📜 index.tsx
  ┃ ┃ ┃ ┃
  ┃ ┃ ┃ ┣ 📂 create-goal.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 styles.ts
  ┃ ┃ ┃ ┃ ┗ 📜 index.tsx
  ┃ ┃ ┃ ┃
  ┃ ┃ ┃ ┣ 📂 empty-goal.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 styles.ts
  ┃ ┃ ┃ ┃ ┗ 📜 index.tsx
  ┃ ┃ ┃ ┃
  ┃ ┃ ┃ ┣ 📂 pending-goals.tsx
  ┃ ┃ ┃ ┃ ┣ 📜 styles.ts
  ┃ ┃ ┃ ┃ ┗ 📜 index.tsx
  ┃ ┃ ┃ ┃
  ┃ ┃ ┃ ┗ 📂 summary.tsx
  ┃ ┃ ┃   ┣ 📜 styles.ts
  ┃ ┃ ┃   ┗ 📜 index.tsx
  ┃ ┃ ┃
  ┃ ┃ ┣ 📂 styles
  ┃ ┃ ┃ ┣ 📜 color.ts
  ┃ ┃ ┃ ┣ 📜 font-family.ts
  ┃ ┃ ┃ ┗ 📜 theme.ts
  ┃ ┃ ┃
  ┃ ┃ ┗ 📂 http
  ┃ ┃   ┣ 📜 create-goal-completion.ts
  ┃ ┃   ┣ 📜 create-goal.ts
  ┃ ┃   ┣ 📜 get-pending-goal.ts
  ┃ ┃   ┗ 📜 get-summary.ts
  ┃ ┃
  ┃ ┣ 📜 .gitignore
  ┃ ┣ 📜 biome.json
  ┃ ┣ 📜 app.json
  ┃ ┣ 📜 expo-env.d.ts
  ┃ ┣ 📜 package-lock.json
  ┃ ┣ 📜 package.json
  ┃ ┣ 📜 postcss.config.js
  ┃ ┣ 📜 tailwind.config.json
  ┃ ┣ 📜 tsconfig.app.json
  ┃ ┗ 📜 tsconfig.json
  ┃
  ┗ 📜 README.md

```

<br/>

#### 📦 Pacotes

---

- [npm](https://docs.npmjs.com/cli/v10/commands/npm): v10.8.2 - npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently.

- [Node.js](https://nodejs.org/en): v18.20.4 - Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

- [React native](https://reactnative.dev): v18.20.4 - React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.

- [Expo Go](https://docs.expo.dev/get-started/set-up-your-environment/#sdk-versions): v2.32.13 - Expo Go is a sandbox for trying out Expo quickly. A development build is a build of your own app that includes Expo's developer tools.

- [Emulador mobile](https://react-native.rocketseat.dev/android/emulador): Utilizar o emulador do Android Studio pois com as atualizações recentes se consolidou como a melhor opção atualmente.

<br/>

#### 🧰 Dependências

---

- Baixar projeto back-end

  > Necessário para rodar aplicação e buscar, listar e cadastrar novos dados.
  > Para executar o back-end seguir documentação do projeto link abaixo:

- [💻 Back-end server](https://github.com/josuellions/rocketseat_nlw17_pocket_nodejs_orbit) - projeto server

<br/>

#### ♻️ Variáveis de Ambiente

---

- Certifique-se de ter configurado o arquivo `.env` ou `.env.development` na raiz do projeto baseado no arquivo `.env.example`, com as variáveis de ambiente necessárias para execução do projeto.

> Caso você não tenha acesso aos valores, solicite ao responsável pelo projeto.

<br/>

#### 🔥 Como executar

---

- Realize o clone ou baixe o projeto localmente.

> Instalar ou atualizar os pacotes e dependências

```bash
npm install
```

- Para executar o projeto em modo de desenvolvimento.

```bash
npm run start
```

ou

- Para executar o projeto para android.

```bash
npm run android
```

<br/>

#### 📑 Padronização

---

<br/>

#### 🧪 Testes

---

<br/>

#### ⚙️ CI/CD

---

<br/>

#### 🚀 Build

---

- Para gerar o build do projeto deve-se abrir no `Visual Code` gerando os arquivos e build da aplicação

```bash
npm build
```

<br/>

#### 🔖 Version

---

- Padronização da estrutura de versionamento

<br/>

#### 📜 Licença

---

- Este repositório e projeto possui licença `MIT license`, para maiores informações:
