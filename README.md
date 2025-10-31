# Bossy Boots

Bossy Boots is a helpful collection of type guards and assertions, written in TypeScript.

## Table of Content

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Overview

The benefits of using Bossy Boots include a more robust runtime and less repetitious logic in your code. With type definitions included out the box, TypeScript environments (especially those in strict mode) will benefit even further with accurate type inference and narrowing.

The bulk of Bossy Boots is made up of assertions and guards that take a value and check if it matches one or more predicates. The most important distinction between the two is that assertions will `throw` if the check fails, whereas guards will return a `boolean` instead, allowing you implement your own handling logic. Most assertions have (and use) guard counterparts.

## Installation

```shell
npm i bossy-boots
```

## Usage

Bossy Boots is completely modular and compatible with both ESM and CommonJS environments.

```javascript
// ESM
import { ... } from 'bossy-boots';

// CommonJS
const { ... } = require('bossy-boots');
```

## API

Below is a brief overview of the available methods. For full API documentation, see the [docs](./docs/bossy-boots.md).

### Assertions

💡 Assertions will `throw` if the check fails. If not handled this will stop execution.

<code>assertIsInstanceOf(value, ...prototypes)</code>

<code>assertIsNotInstanceOf(value, ...prototypes)</code>

<code>assertIsTypeOf(value, ...types)</code>

<code>assertIsNotTypeOf(value, ...types)</code>

### Guards

💡 Guards return a `boolean` that is `true` if the check succeeds, and `false` otherwise.

<code>isInstanceOf(value, ...prototypes)</code>

<code>isNotInstanceOf(value, ...prototypes)</code>

<code>isTypeOf(value, ...types)</code>

<code>isNotTypeOf(value, ...types)</code>

### Common abstractions

While the default assertions and guards are powerful and flexible, they may become gratuitous for repetitive checks. To this end, Bossy Boots also includes a collection of methods which abstract away common checks.

#### Instance

<table>
  <thead>
    <tr>
      <th rowspan="2">Instance</th>
      <th colspan="2">Assertion</th>
      <th colspan="2">Guard</th>
    </tr>
    <tr>
      <th><em>is</em></th>
      <th><em>is not</em></th>
      <th><em>is</em></th>
      <th><em>is not</em></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Element</code></td>
      <td><code>assertIsElement()</code></td>
      <td><code>assertIsNotElement()</code></td>
      <td><code>isElement()</code></td>
      <td><code>isNotElement()</code></td>
    </tr>
    <tr>
      <td><code>HTMLElement</code></td>
      <td><code>assertIsHTMLElement()</code></td>
      <td><code>assertIsNotHTMLElement()</code></td>
      <td><code>isHTMLElement()</code></td>
      <td><code>isNotHTMLElement()</code></td>
    </tr>
  </tbody>
</table>

#### Type

<table>
  <thead>
    <tr>
      <th rowspan="2">Type</th>
      <th colspan="2">Assertion</th>
      <th colspan="2">Guard</th>
    </tr>
    <tr>
      <th><em>is</em></th>
      <th><em>is not</em></th>
      <th><em>is</em></th>
      <th><em>is not</em></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>boolean</code></td>
      <td><code>assertIsBoolean()</code></td>
      <td><code>assertIsNotBoolean()</code></td>
      <td><code>isBoolean()</code></td>
      <td><code>isNotBoolean()</code></td>
    </tr>
    <tr>
      <td><code>bigint</code></td>
      <td><code>assertIsBigInt()</code></td>
      <td><code>assertIsNotBigInt()</code></td>
      <td><code>isBigInt()</code></td>
      <td><code>isNotBigInt()</code></td>
    </tr>
    <tr>
      <td><code>null</code></td>
      <td><code>assertIsNull()</code></td>
      <td><code>assertIsNotNull()</code></td>
      <td><code>isNull()</code></td>
      <td><code>isNotNull()</code></td>
    </tr>
    <tr>
      <td><code>undefined</code></td>
      <td><code>assertIsUndefined()</code></td>
      <td><code>assertIsNotUndefined()</code></td>
      <td><code>isUndefined()</code></td>
      <td><code>isNotUndefined()</code></td>
    </tr>
    <tr>
      <td><code>nullish</code> *</td>
      <td><code>assertIsNullish()</code></td>
      <td><code>assertIsNotNullish()</code></td>
      <td><code>isNullish()</code></td>
      <td><code>isNotNullish()</code></td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td><code>assertIsNumber()</code></td>
      <td><code>assertIsNotNumber()</code></td>
      <td><code>isNumber()</code></td>
      <td><code>isNotNumber()</code></td>
    </tr>
    <tr>
      <td><code>string</code></td>
      <td><code>assertIsString()</code></td>
      <td><code>assertIsNotString()</code></td>
      <td><code>isString()</code></td>
      <td><code>isNotString()</code></td>
    </tr>
    <tr>
      <td><code>symbol</code></td>
      <td><code>assertIsSymbol()</code></td>
      <td><code>assertIsNotSymbol()</code></td>
      <td><code>isSymbol()</code></td>
      <td><code>isNotSymbol()</code></td>
    </tr>
  </tbody>
</table>

\* `nullish` is equivalent to `null` OR `undefined`.

## Utils

<code>assert(condition, [message])</code>

<code>guarantee(value)</code>

## License

Made with ❤️

Published under the [MIT License](./LICENCE).