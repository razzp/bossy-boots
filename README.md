# Bossy Boots

Bossy Boots is a helpful collection of type guards and assertions, written in TypeScript.

## Contents

<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li>
    <a href="#API">
          API
    </a>
    <ul>
      <li>
        <a href="#Assertions">
              Assertions
        </a>
        <ul>
          <li>
            <a href="#Assertions.Instance">
                  Instance
            </a>
            <ul>
                <li>
                  <a href="#assertIsInstanceOf">
                        <code>assertIsInstanceOf()</code>
                  </a>
                </li>      <li>
                  <a href="#assertIsNotInstanceOf">
                        <code>assertIsNotInstanceOf()</code>
                  </a>
                </li>  </ul>
          </li>    <li>
            <a href="#Assertions.Type">
                  Type
            </a>
            <ul>
                <li>
                  <a href="#assertIsTypeOf">
                        <code>assertIsTypeOf()</code>
                  </a>
                </li>      <li>
                  <a href="#assertIsNotTypeOf">
                        <code>assertIsNotTypeOf()</code>
                  </a>
                </li>  </ul>
          </li>  </ul>
      </li>    <li>
        <a href="#Guards">
              Guards
        </a>
        <ul>
          <li>
            <a href="#Guards.Instance">
                  Instance
            </a>
            <ul>
                <li>
                  <a href="#isInstanceOf">
                        <code>isInstanceOf()</code>
                  </a>
                </li>      <li>
                  <a href="#isNotInstanceOf">
                        <code>isNotInstanceOf()</code>
                  </a>
                </li>  </ul>
          </li>    <li>
            <a href="#Guards.Type">
                  Type
            </a>
            <ul>
                <li>
                  <a href="#isTypeOf">
                        <code>isTypeOf()</code>
                  </a>
                </li>      <li>
                  <a href="#isNotTypeOf">
                        <code>isNotTypeOf()</code>
                  </a>
                </li>  </ul>
          </li>  </ul>
      </li>    <li>
        <a href="#Abstractions">
              Common use-case wrappers
        </a>
        <ul>
          <li>
            <a href="#Abstractions.Instance">
                  Instance
            </a>
            <ul>
              <li>
                <a href="#Element">
                    <code>Element</code>
                </a>
              </li>    <li>
                <a href="#HTMLElement">
                    <code>HTMLElement</code>
                </a>
              </li>  </ul>
          </li>    <li>
            <a href="#Abstractions.Type">
                  Type
            </a>
            <ul>
              <li>
                <a href="#Boolean">
                    <code>boolean</code>
                </a>
              </li>    <li>
                <a href="#BigInt">
                    <code>bigint</code>
                </a>
              </li>    <li>
                <a href="#Null">
                    <code>null</code>
                </a>
              </li>    <li>
                <a href="#Undefined">
                    <code>undefined</code>
                </a>
              </li>    <li>
                <a href="#Nullish">
                    <code>nullish</code>
                </a>
              </li>    <li>
                <a href="#Number">
                    <code>number</code>
                </a>
              </li>    <li>
                <a href="#String">
                    <code>string</code>
                </a>
              </li>    <li>
                <a href="#Symbol">
                    <code>symbol</code>
                </a>
              </li>  </ul>
          </li>  </ul>
      </li>    <li>
        <a href="#Utils">
              Utils
        </a>
        <ul>
            <li>
              <a href="#assert">
                    <code>assert()</code>
              </a>
            </li>      <li>
              <a href="#guarantee">
                    <code>guarantee()</code>
              </a>
            </li>  </ul>
      </li>  </ul>
  </li></ul>

## Overview

The benefits of using Bossy Boots include a more robust runtime and less repetitious logic in your code. With type definitions included out the box, TypeScript environments (especially those in strict mode) will benefit even further with accurate type inference and narrowing.

The bulk of Bossy Boots is made up of **assertions** and **guards** that take a value and check if it matches one or more predicates. The most important distinction between the two is that **assertions** will `throw` if the check fails, whereas **guards** will return a `boolean` instead, allowing you implement your own handling logic. Most **assertions** have (and use) **guard** counterparts.

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

<h2 id="API">API</h2>

<h2 id="Assertions">Assertions</h2>

💡 Assertions will `throw` if the check fails. If not handled this will stop execution.

<h2 id="Assertions.Instance">Assertions &raquo; Instance</h2>

<h3 id="assertIsInstanceOf"><code>assertIsInstanceOf(value, ...prototypes)</code></h3>

Assert that a value is an instance of one or more prototypes.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to assert |
| ...prototypes | `Array.<function()>` | The prototype(s) to check |

**Example:**

```typescript
function foo(input: Red | Yellow | Green | Blue) {    try {        assertIsInstanceOf(input, Yellow, Blue);        input; // Yellow | Blue    } catch (error) {}}
```

<hr />

<h3 id="assertIsNotInstanceOf"><code>assertIsNotInstanceOf(value, ...prototypes)</code></h3>

Assert that a value is *not* an instance of one or more prototypes.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to assert |
| ...prototypes | `Array.<function()>` | The prototype(s) to check |

**Example:**

```typescript
function foo(input: Red | Yellow | Green | Blue) {    try {        assertIsNotInstanceOf(input, Yellow, Blue);        input; // Red | Green    } catch (error) {}}
```

<hr />

<h2 id="Assertions.Type">Assertions &raquo; Type</h2>

<h3 id="assertIsTypeOf"><code>assertIsTypeOf(value, ...types)</code></h3>

Assert that a value's type matches one or more types.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to assert |
| ...types | `Array.<Primitive>` | The types(s) to check |

**Example:**

```typescript
function foo(input: string | number | symbol | boolean) {    try {        assertIsTypeOf(input, 'number', 'boolean');        input; // number | boolean    } catch (error) {}}
```

<hr />

<h3 id="assertIsNotTypeOf"><code>assertIsNotTypeOf(value, ...types)</code></h3>

Assert that a value's type *does not* match one or more types.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to assert |
| ...types | `Array.<Primitive>` | The types(s) to check |

**Example:**

```typescript
function foo(input: string | number | symbol | boolean) {    try {        assertIsNotTypeOf(input, 'number', 'boolean');        input; // string | symbol    } catch (error) {}}
```

<hr />

<h2 id="Guards">Guards</h2>

💡 Guards return a `boolean` that is `true` if the check succeeds, and `false` otherwise.

<h2 id="Guards.Instance">Guards &raquo; Instance</h2>

<h3 id="isInstanceOf"><code>isInstanceOf(value, ...prototypes)</code></h3>

Check that a value is an instance of one or more prototypes.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to assert |
| ...prototypes | `Array.<function()>` | The prototype(s) to check |

**Example:**

```typescript
function foo(input: Red | Yellow | Green | Blue) {    if (isInstanceOf(input, Yellow, Blue)) {        input; // Yellow | Blue    }}
```

<hr />

<h3 id="isNotInstanceOf"><code>isNotInstanceOf(value, ...prototypes)</code></h3>

Check that a value is *not* an instance of one or more prototypes.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to assert |
| ...prototypes | `Array.<function()>` | The prototype(s) to check |

**Example:**

```typescript
function foo(input: Red | Yellow | Green | Blue) {    if (isNotInstanceOf(input, Yellow, Blue)) {        input; // Red | Green    }}
```

<hr />

<h2 id="Guards.Type">Guards &raquo; Type</h2>

<h3 id="isTypeOf"><code>isTypeOf(value, ...types)</code></h3>

Check that a value's type matches one or more types.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to assert |
| ...types | `Array.<Primitive>` | The types(s) to check |

**Example:**

```typescript
function foo(input: string | number | symbol | boolean) {    if (isTypeOf(input, 'number', 'boolean')) {        input; // number | boolean    }}
```

<hr />

<h3 id="isNotTypeOf"><code>isNotTypeOf(value, ...types)</code></h3>

Check that a value's type *does not* match one or more types.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to assert |
| ...types | `Array.<Primitive>` | The types(s) to check |

**Example:**

```typescript
function foo(input: string | number | symbol | boolean) {    if (isNotTypeOf(input, 'number', 'boolean')) {        input; // string | symbol    }}
```

<hr />

<h2 id="Abstractions">Common use-case wrappers</h2>

While the overarching `InstanceOf()` and `TypeOf()` methods are powerful
and flexible, they too may become gratuitous for repetitive checks. To this end,
Bossy Boots also includes a collection of methods which abstract away common checks.

**Example:**

```javascript
assertIsBoolean(value);

// Is the equivalent of:

assertIsType(value, 'boolean');
```

**Available methods:**

<h3 id="Abstractions.Instance">Instance</h2>

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
    <tr id="Element">
      <td><code>Element</code></td>
      <td><code>assertIsElement()</code></td>
      <td><code>assertIsNotElement()</code></td>
      <td><code>isElement()</code></td>
      <td><code>isNotElement()</code></td>
    </tr>
    <tr id="HTMLElement">
      <td><code>HTMLElement</code></td>
      <td><code>assertIsHTMLElement()</code></td>
      <td><code>assertIsNotHTMLElement()</code></td>
      <td><code>isHTMLElement()</code></td>
      <td><code>isNotHTMLElement()</code></td>
    </tr>
  </tbody>
</table>

<h3 id="Abstractions.Type">Type</h2>

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
    <tr id="Boolean">
      <td><code>boolean</code></td>
      <td><code>assertIsBoolean()</code></td>
      <td><code>assertIsNotBoolean()</code></td>
      <td><code>isBoolean()</code></td>
      <td><code>isNotBoolean()</code></td>
    </tr>
    <tr id="BigInt">
      <td><code>bigint</code></td>
      <td><code>assertIsBigInt()</code></td>
      <td><code>assertIsNotBigInt()</code></td>
      <td><code>isBigInt()</code></td>
      <td><code>isNotBigInt()</code></td>
    </tr>
    <tr id="Null">
      <td><code>null</code></td>
      <td><code>assertIsNull()</code></td>
      <td><code>assertIsNotNull()</code></td>
      <td><code>isNull()</code></td>
      <td><code>isNotNull()</code></td>
    </tr>
    <tr id="Undefined">
      <td><code>undefined</code></td>
      <td><code>assertIsUndefined()</code></td>
      <td><code>assertIsNotUndefined()</code></td>
      <td><code>isUndefined()</code></td>
      <td><code>isNotUndefined()</code></td>
    </tr>
    <tr id="Nullish">
      <td><code>nullish</code> *</td>
      <td><code>assertIsNullish()</code></td>
      <td><code>assertIsNotNullish()</code></td>
      <td><code>isNullish()</code></td>
      <td><code>isNotNullish()</code></td>
    </tr>
    <tr id="Number">
      <td><code>number</code></td>
      <td><code>assertIsNumber()</code></td>
      <td><code>assertIsNotNumber()</code></td>
      <td><code>isNumber()</code></td>
      <td><code>isNotNumber()</code></td>
    </tr>
    <tr id="String">
      <td><code>string</code></td>
      <td><code>assertIsString()</code></td>
      <td><code>assertIsNotString()</code></td>
      <td><code>isString()</code></td>
      <td><code>isNotString()</code></td>
    </tr>
    <tr id="Symbol">
      <td><code>symbol</code></td>
      <td><code>assertIsSymbol()</code></td>
      <td><code>assertIsNotSymbol()</code></td>
      <td><code>isSymbol()</code></td>
      <td><code>isNotSymbol()</code></td>
    </tr>
  </tbody>
</table>

\* `nullish` is equivalent to `null` OR `undefined`.

<h2 id="Utils">Utils</h2>

<h3 id="assert"><code>assert(condition, [message])</code></h3>

Assert that a condition is true.

| Param | Type | Description |
| --- | --- | --- |
| condition | `unknown` | The condition to assert |
| [message] | `string` | An optional message to include if the assertion fails |

**Example:**

```typescript
function foo(input: number) {    assert(input === 1);    input; // 1}
```

<hr />

<h3 id="guarantee"><code>guarantee(value, [fallback])</code></h3>

Guarantee that a value is not nullish *(`null` or `undefined`)*, with an optional fallback.

| Param | Type | Description |
| --- | --- | --- |
| value | `unknown` | The value to guarantee |
| [fallback] | `unknown` | An optional fallback value |

**Returns:** 

`value` or `fallback` if either are not nullish, otherwise will `throw`

**Example:**

```typescript
// Value will be `null | Element`const foo = document.querySelectorAll('.foo');// Value will be `Element`.const bar = guarantee(document.querySelectorAll('.bar'));
```

<hr />

