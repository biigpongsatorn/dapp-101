# DAPP-101

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```

# Smart contract address

[0xeb4de03811769832344b03cd994be093106bf2e2](https://kovan.etherscan.io/address/0xeb4de03811769832344b03cd994be093106bf2e2)

# JSON ABI

```json
[
  {
    "constant": true,
    "inputs": [],
    "name": "getMyName",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "setMyName",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```