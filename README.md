# Workshop CI/CD with Github Actions (SINF 2024)

In this workshop, you will implement a CI/CD pipeline to achieve the following tasks:

(on pull requests and pushes to `main`)

- Lint the code
- Check the formatting of the code

(only on pushes to `main`)
- Build the website distribution
- Upload it to Github Pages

After this has been achieved, you will need to add [a new article](https://raw.githubusercontent.com/NIAEFEUP/slides/refs/heads/master/gh-actions-workshop-sinf2024/practice/02-continuous-newspaper-enhances-efficiency-with-ci-cd.md) to the website and create a pull request to add it to the main branch.

## Useful links

- [Presentation](https://slides.niaefeup.pt/gh-actions-workshop-sinf2024/)
- [Github Actions general documentation](https://docs.github.com/en/actions)
- [Github Actions workflow syntax](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
- [Github Actions workflow contexts](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs)
- [Github Actions marketplace](https://github.com/marketplace?type=actions)
- [Astro documentation for deploying to Github Pages](https://docs.astro.build/en/guides/deploy/github/)

## Useful commands

- `npm run setup`: Initial setup of the project
- `npm run lint`: Lint the code in the project
- `npm run build`: Build the website distribution
- `npm run format:check`: Check if the code in the project is properly formatted
- `npm run format:write`: Format the code in the project

## Tips!

- The following actions might be useful:

  - [`actions/checkout`](https://github.com/actions/checkout): Checkout a repository
  - [`actions/setup-node`](https://github.com/actions/setup-node): Setup Node.js
  - [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact): Upload a GitHub Pages artifact
  - [`actions/deploy-pages`](https://github.com/actions/deploy-pages): Deploy a GitHub Pages artifact to GitHub Pages
  - [`actions/cache`](https://github.com/actions/cache): Cache dependencies

> [!CAUTION]
>
> 1. Don't forget to enable GitHub Pages in your repository settings. Go to *Settings* > *Pages* and change *Build and Deployment* > *Source* to *GitHub Actions*.
> 2. Don't forget to change `repositoryName` in `astro.config.mjs` to the name of your repository.
