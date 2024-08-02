# My First NPM Package

With the help of this package you can convert any currency to another currency

## Installation

To install this package, run:

```bash
npm i sl-currency-converter

## My Package Dependencies (1)

Dependencies (1)
[![@everapi/freecurrencyapi-js](https://badge.fury.io/js/my-awesome-npm-package.svg)](https://www.npmjs.com/package/@everapi/freecurrencyapi-js?activeTab=dependencies)

```bash```
npm i @everapi/freecurrencyapi-js


`Typescript`

```js 
import { convertCurrency } from "sl-currency-converter";

convertCurrency('USD', 'INR', 2).then(response => { console.log(response)});