# murmur3tostring

BASED ON  [murmur-128](https://www.npmjs.com/package/murmur-128) 

`murmur-128` output an arrayBuffer ; and it is better to get a string

## Installation
```
npm install --save murmur3tostring
```
## Usage
```
import murmur3tostring from "murmur3tostring"

console.log(murmur3tostring("123"))

// the result will be:  2f2b4d51086f407b086f407b086f407b
```
## Test

git clone and run 

```
npm run test
```

we will see 
```
> node test.js

input something : 123123
the result is :  a5961fd5dc54299b60937c3160937c31
```

