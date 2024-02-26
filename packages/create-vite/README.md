# @pirtor/create-vite <a href="https://npmjs.com/package/@pirtor/create-vite"><img src="https://img.shields.io/npm/v/@pirtor/create-vite" alt="npm package"></a>

## What is this

This project is forked from `create-vite`, and the following template has been adjusted to fulfill my needs for quickly starting a demo project that provides a good developer experience and uses the technologies I commonly use.

- `vanilla-ts`
- `react-ts`
- `react-swc-ts`

Each template includes `TypeScript`, `ESLint`, `Prettier`, `Tailwind CSS`.
And React templates come with `Shadcn UI` Additionally.
`Husky`, `Lint-staged` or `Commitlint` is not included because I only use this to write demo projects. However, if your project grows, consider using them.

> **Note:**
> If you have the same requirements and share the same tech stack, feel free to submit a pull request (PR). But as this project was built for personal use, PRs are not guaranteed to be merged. Also the templates may change over time. Consider releasing your own version if this happen.

Try this and give me a star if you like it.

With PNPM (I recommend using pnpm, as I am a big fan of it):

```bash
$ pnpm create @pirtor/vite
```

With NPM:

```bash
$ npm create @pirtor/vite
```

With Yarn:

```bash
$ yarn create @pirtor/vite
```

With Bun (I haven’t tried this yet):

```bash
$ bun create @pirtor/vite
```

Then follow the prompts!

---

# create-vite <a href="https://npmjs.com/package/create-vite"><img src="https://img.shields.io/npm/v/create-vite" alt="npm package"></a>

## Scaffolding Your First Vite Project

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version 18+, 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
$ npm create vite@latest
```

With Yarn:

```bash
$ yarn create vite
```

With PNPM:

```bash
$ pnpm create vite
```

With Bun:

```bash
$ bun create vite
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# Bun
bun create vite my-vue-app --template vue
```

Currently supported template presets include:

- `vanilla`
- `vanilla-ts`
- `vue`
- `vue-ts`
- `react`
- `react-ts`
- `react-swc`
- `react-swc-ts`
- `preact`
- `preact-ts`
- `lit`
- `lit-ts`
- `svelte`
- `svelte-ts`
- `solid`
- `solid-ts`
- `qwik`
- `qwik-ts`

You can use `.` for the project name to scaffold in the current directory.

## Community Templates

create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for [community maintained templates](https://github.com/vitejs/awesome-vite#templates) that include other tools or target different frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```
