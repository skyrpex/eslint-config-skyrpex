# Skyrpex - ESLint Shareable Config

ESLint Shareable Config for JavaScript Style

## Installation

```
npm install eslint-config-skyrpex -D
```

## Usage

Add this to your ```.eslintrc.json``` file:

```json
{
    "extends": ["skyrpex"]
}
```
If you use Buble (instead of Babel):

```json
{
    "extends": ["skyrpex/buble"]
}
```

If you use Vue:

```json
{
    "extends": ["skyrpex/vue"]
}
```

If you use Jest:

```json
{
    "extends": ["skyrpex/jest"]
}
