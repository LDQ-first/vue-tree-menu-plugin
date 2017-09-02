<template>
  <div id="app">
    <show></show>
  </div>
</template>

<script>
import Show from './views/show.vue'


export default {
  name: 'app',
  components: {
    Show
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

html {
  height: 100%;
}

body {
  background: linear-gradient(135deg,
   rgba(104, 201, 182, 1), rgba(54, 119, 206, 1)) no-repeat;
  background-attachment: fixed;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #0060E9;
  &:hover {
    text-decoration: underline;
    color: #FF6C09;
  }
}

ul, li {
  list-style: none;
}


::-webkit-scrollbar {
    width: 0.5em
}

::-webkit-scrollbar-track {
    border-radius: 0.25em;
    background: #ceb9d1
}

::-webkit-scrollbar-thumb {
    height: 0.5em;
    border-radius: 0.25em;
    background: #498bd6 linear-gradient(180deg,#fff,rgba(3,169,244,.5),#0277bd)
}

button {
  display: inline-block;
  cursor: pointer;
  border: none;
  outline: none;
  -webkit-appearance: none;
  color: #fff;
  overflow: hidden;
  background: #7e57c2;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  padding: 0;
  min-width: 88px;
  box-shadow: 0 1px 6px rgba(0,0,0,.4),
              0 1px 4px rgba(0,0,0,.2);
}
pre {
    border: 2px solid #8BE388;
    tab-size: 4;
    word-wrap: break-word;
    white-space: pre-wrap;
}
pre + pre {
  margin-top: 0.5em;
}
code {
    font-family: Consolas,Monaco;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: left;
}

input {
  border: none;
  outline: none;
  padding: 1em 2em;
  border-radius: 20px;
  background: rgba(183, 162, 221, 1);
  color: #FFF;
}
</style>
