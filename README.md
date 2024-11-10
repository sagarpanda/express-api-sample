# Express API Sample

This is a sample express app with typescript support

## Development

```sh
# .env
PORT=3000  # Optional
```

```sh
# run app in dev mode
$ yarn dev

# build app
$ yarn build
# run app in prod mode (Note: build before you start app)
$ yarn start
```

## With Dev Container

```json
// .devcontainer/devcontainer.json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/javascript-node
{
  "name": "express-api-sample",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm",

  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  "forwardPorts": [3000],

  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "yarn install"

  // Configure tool-specific properties.
  // "customizations": {},

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root"
}
```

## Tech Stack and features

- Express
- Typescript
- Prettier for formatting
- Format onSave using vscode `settings.json`
- Support path alias using `tsconfig.json`
- Nodemon
