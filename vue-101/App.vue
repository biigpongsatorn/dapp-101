<template>
  <div id="app">
    <HelloWorld :msg="fullName"/>
    <button @click="changeText">Click</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      test: 'Hello',
      firstName: 'Narong',
      lastName: 'ABC'
    }
  },
  methods: {
    changeText () {
      this.lastName = 'World'
    }
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    fullName (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  created () {
    console.log('created.')
    const dom = document.getElementById('app')
    console.log(dom)
  },
  mounted () {
    console.log('mounted.')
    const dom = document.getElementById('app')
    console.log(dom)
  },
  updated () {
    console.log('updated.')
    const dom = document.getElementById('app')
    console.log(dom)
  },
  components: {
    HelloWorld
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
</style>
