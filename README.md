# Axia Turbo Stack
<p align="center">
  <a href="https://twitter.com/axiacoder" target="_blank"><img src="https://img.shields.io/twitter/follow/axiacoder?style=social" /></a>
</p>

## Tech Stack
- [pnpm](https://pnpm.io)
- [Turborepo](https://turbo.build)
- [Prisma](https://prisma.io)
- [Clerk](https://clerk.dev)
- [ReactJS](https://reactjs.org/)
- [Typescript](https://typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Jest](https://jestjs.io)
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)
- [Type-Fest](#type-fest)

# Installation

To get started with the project, run `pnpm` in the root directory to install the required dependencies for each package:

```sh
pnpm i
```

### Environment variables.

You need to replace every `.env.example` that you can find by a `.env` with your environment variables.

You can find a `.env.example` in:

- at the root of the project
- `apps/api`
- `apps/front`
  (you need to setupe clerk first)
- `package/database`

### DB installation
after setting up the database, you need to migrate your schema to the database.

```sh
turbo db:push
turbo db:generate
```

### Launching the project

```sh
pnpm dev
```
(note : turbo db:generate is automatically runned when you launch the project)

# More Information about the stack
## Main Apps
### Front
Front is an app run with ReactJS.
For the authentification, this app use [Clerk](https://clerk.dev), a service that provide a simple authentification system.

This app use Vite as a bundler, and Vitest as a test runner. You also have access to a playwright test suite.

### API
API is an app run with NestJS, it's the main app of the project. It's the only app that can access the database.
As a NestJS app, it contains a Jest test suite, and an Eslint/Prettier configuration.
To authentify clerk users, this app use a middleware that check the information in the request header, which are send by the front app.

## Packages
### ESLint
Contain the shared eslint configuration for the project.

### i18n
Contain all the translations json files for the projet. 
You also have access to a function that harmonize the translations keys.
Example : if your app i18n give you the locale fr_FR, the function will give you fr.

### Interface
Provide all the interfaces used in the project.
Type your api output with it, and use it in your front app.

### Prisma
Your shared prisma configuration, with the database url.

### TSConfig
Contain the shared tsconfig configuration for the project.

### UI
All your shared components, hooks, and utils.

### Type-Fest
[Link to the library](https://github.com/sindresorhus/type-fest).
Type-Fest is a collection of essential TypeScript types. It's used in the project to provide some types that are not provided by the typescript compiler.
