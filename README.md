# murmur3tostring

BASED ON  [murmur-128](https://www.npmjs.com/package/murmur-128) 

`murmur-128` output an arrayBuffer ; and it is better to get a string

## Installation
```
npm install --save murmur3tostring
```
## Usage
```
import ArrayBufferToString from "./index.js"

const string = "123"

console.log(ArrayBufferToString(string))

// the result will be:  2f2b4d51086f407b086f407b086f407b

```
## Test

git clone and run 

```
npm run test
```