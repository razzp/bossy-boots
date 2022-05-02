# Bossy Boots
Bossy Boots is a helpful collection of type guards and assertions. Written in TypeScript and with type definitions included, Bossy Boots will benefit you not just at runtime but during development too.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
- API (Coming soon)
  
## Installation

```shell
npm i bossy-boots
```

## Usage

Bossy Boots is completely modular and compatible with both ESM and CommonJS environments.

```javascript
// ESM
import { foo } from 'bossy-boots';

// CommonJS
const { foo } = require('bossy-boots');
```

## Overview

The bulk of Bossy Boots is made up of **assertions** and **guards**. The most important distinction between the two is that **assertions** will `throw` if the condition(s) are not met, whereas **guards** will return a `boolean` instead, allowing you implement your own handling logic. Most **assertions** have (and use) **guard** counterparts.

Guards have the following signature:

```typescript
guard<T>(value: any, ...) => value is T
```

Guards return a `boolean` that is `true` if the condition (`value is T`) is met, and `false` otherwise.

Assertions have a similar signature:

```typescript
assertion<T>(value: any, ...) => asserts value is T
```

Assertions will `throw` if the condition (`value is T`) is not met. If not handled this will stop execution.

## Examples

```javascript
// Using a guard:

import { isNotNull } from 'bossy-boots';

document.addEventListener('click', (event) => {
  // target has a union type of `EventTarget | null`
  const target = event.target;

  // target is possibly `null`. This could throw at runtime and will fail type-checking.
  target.method();

  if (isNotNull(target)) {
    // target is not `null`, which narrows the type to `EventTarget`. We're good to go.
    target.method();
  }
});
```

```javascript
// Using an assertion:

import { assertIsNotNull } from 'bossy-boots';

document.addEventListener('click', (event) => {
  // target has a union type of `EventTarget | null`
  const target = event.target;

  // If the check fails it will throw.
  assertIsNotNull(target);

  // We're still executing, so we can be assured that target is `EventTarget`.
  target.method();
});
```

## API

Coming soon!