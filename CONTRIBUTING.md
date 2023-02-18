# Contributing

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.

## How can I contribute?

- **Give us a star.** It may not seem like much, but it really makes a
  difference. This is something that everyone can do to help out. Github
  stars help the project gain visibility and stand out.

- **Help with open issues.** Sometimes, issues lack necessary information and some
  are duplicates of older issues.
  You can help out by guiding people through the process of filling out the
  issue template, asking for clarifying information or pointing them to existing
  issues that match their description of the problem.

- **Review documentation changes.** Most documentation just needs a review for
  proper spelling and grammar. If you think a document can be improved in any
  way, feel free to hit the `edit` button at the top of the page. More info on
  contributing to the documentation

- **Help with tests.** Pull requests may lack proper tests or test plans. These
  are needed for the change to be implemented safely.

- **Create a pull request.** If you have an idea for a new feature or a bug fix.

## Pull request process

All contributions are made via pull requests. To make a pull request, you will
need a GitHub account; if you are unclear on this process, see GitHub's
documentation on [forking](https://help.github.com/articles/fork-a-repo) and
[pull requests](https://help.github.com/articles/using-pull-requests). Pull
requests should be targeted at the `main` branch.

1. Create a feature branch off of `main` so that changes do not get mixed up.
2. [Rebase](http://git-scm.com/book/en/Git-Branching-Rebasing) your local
   changes against the `main` branch.

If a pull request is not ready to be reviewed yet
[it should be marked as a "Draft"](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).

### Working with forks

```bash
# First you clone the original repository
git clone git@github.com:AxiaCoder/axia-turbo-starter.git
# Next you add a git remote that is your fork:
git remote add fork git@github.com:<YOUR-GITHUB-USERNAME-HERE>/axia-turbo-starter.git
# Next you fetch the latest changes from origin for master:
git fetch origin
git checkout main
git pull --rebase
# Next you create a new feature branch off of master:
git checkout my-feature-branch
# Now you do your work and commit your changes:
git add -A
git commit -a -m "fix([feature target]) this is the subject line #123"
# for more informations about commit message, see below
# And the last step is pushing this to your fork
git push -u fork my-feature-branch
```

Now go to the project's GitHub Pull Request page and click "New pull request"

## Setup

### PNPM

First, you will need to have [`pnpm`](https://pnpm.io/) installed on your machine.

From the [installation page](https://pnpm.io/installation), choose your preferred install method and run it.

### NodeJS

Next, you'll need to have [NodeJS](https://nodejs.org/en/) installed, with the required version. The required version is specified in the [`.npmrc`](.npmrc) root file, aswell as in every `package.json` file :

Feel free to use the node-version manager of your choice (like [nvm](https://github.com/nvm-sh/nvm)), but we recommend using the integrated manager of pnpm. The [`pnpm env`](https://pnpm.io/fr/cli/env) command allows you to manage whatever node engine pnpm should use. Go into any `package.json` file and find the required node version, then enter the following command :

```sh
$ pnpm env use --global 18.4.0
```

If you enter the wrong version, or if the required node version changes, pnpm will throw errors until you make the apropriate changes.

> :information_source: Using the `pnpm env` command, pnpm will resolve a separate node instance from the one you installed on your system. Note that the _pnpm_ version will be used for dependencies resolution **aswell** as for scripts.

### Environment variables.

You need to replace every `.env.example` that you can find by a `.env` with your environment variables.

You can find a `.env.example` in:

- at the root of the project
- `apps/api`
- `apps/front`
  (you need to setupe clerk first)
- `package/database`

## Development workflow

To get started with the project, run `pnpm` in the root directory to install the required dependencies for each package:

```sh
pnpm i
pnpm dev
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

## Code of Conduct

### Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

### Our Standards

Examples of behavior that contributes to a positive environment for our community include:

- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
- Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

- The use of sexualized language or imagery, and sexual attention or
  advances of any kind
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or email
  address, without their explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting
