# eslint-config

My ESLint config.

## Install

```sh
npm install --save-dev @1000ch/eslint-config
```

## Usage

In `.eslintrc`:

```json
{
  "extends": [
    "@1000ch/eslint-config",
    "@1000ch/eslint-config/react"
  ]
}
```

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": [
      "@1000ch/eslint-config",
      "@1000ch/eslint-config/react"
    ]
  }
}
```

## License

MIT: http://1000ch.mit-license.org/
