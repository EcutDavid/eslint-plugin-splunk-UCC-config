# eslint-plugin-splunk-ucc-config

Eslint plugin for Splunk UCC global configuration file

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-splunk-ucc-config`:

```
$ npm install eslint-plugin-splunk-ucc-config --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-splunk-ucc-config` globally.

## Usage

Add `splunk-ucc-config` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "splunk-ucc-config"
    ]
}
```
