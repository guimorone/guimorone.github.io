# Personal Website

Application using React with TypeScript and Tailwind CSS.

## Dependencies

- [bun](https://bun.com/docs/installation) v1.4.4

## Running Locally

```sh
cd website/
bun install
bun run dev
```

## Deploying a Previous Version

Go to Actions, select the Deployment workflow, click Run workflow and fill in the `tag` input (e.g. `v1.3.10`). Leaving it empty deploys the current commit. Tag deployments do not create a new release.
