<template>
  <div id="app">
    <div v-if="isReady">
      <!-- If login Metamask -->
      <div v-if="isTxStatus && hash">
        <!-- Transaction status -->
        <h1 :class="{
          'cl-or': isTxStatus === 'Pending',
          'cl-green': isTxStatus === 'Success'
        }">
          Transaction status: {{ isTxStatus }}
        </h1>
      </div>
      <h1>
        <!-- Name from Blockchain -->
        Your name in Blockchain is : {{ myname }}
      </h1>
      <div>
        <!-- input bla bla bla -->
        <input type="text" v-model="nameInput" style="margin-right: 10px;">
        <button @click="setMyname">Set name</button>
      </div>
      <br>
      <div v-if="hash">
        <!-- When transaction hashed will show this. -->
        <b>
          hash:
          <a :href="`https://kovan.etherscan.io/tx/${hash}`" target="_blank">
            {{ hash }}
          </a>
        </b>
      </div>
    </div>
    <div v-else>
      <!-- If not login metamask will it show this -->
      <h1>Please login your fucking Metamask 🙂</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // Smart contract address
      simpleContractAddr: '0xeb4de03811769832344b03cd994be093106bf2e2',
      // Smart contract ABI
      simpleAbi: [
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
      ],
      contract: null,
      myWalletAddress: [],
      myname: '',
      nameInput: '',
      hash: '',
      isTxStatus: '',
      isReady: true
    }
  },
  methods: {
    setMyname () {
      // function set name
      this.contract.methods.setMyName(this.nameInput).send({
        from: this.myWalletAddress[0]
      }).on('transactionHash', (hash) => {
        // when transaction hashed will call this event.
        this.nameInput = ''
        this.hash = hash
        this.isTxStatus = 'Pending'
      }).on('confirmation', (confirmationNumber) => {
        // When transaction confirmed will call this event.
        if (confirmationNumber === 1) {
          this.isTxStatus = 'Success'
          this.getMyname()
        }
      })
    },
    async getMyname () {
      // Get your name in Blockchain.
      this.myname = await this.contract.methods.getMyName().call()
    }
  },
  async mounted () {
    // Connect smart contract
    this.contract = await new this.$web3.eth.Contract(this.simpleAbi, this.simpleContractAddr)
    // Get wallet address from Metamask
    this.myWalletAddress = await this.$web3.eth.getAccounts()
    // Is metamask login ?
    if (!this.myWalletAddress.length) {
      // Not login
      this.isReady = false
      alert('Please login you funcking Metamask :)')
    } else {
      // Loged in will call get name
      this.getMyname()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cl-green {
  color: green;
}
.cl-or {
  color: orange;
}
</style>
