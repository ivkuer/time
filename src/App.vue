<script setup>
import { Time } from './time';
import {ref} from 'vue'

let t = new Time()
const time = ref(t.date)
function addd() {
  t = t.add(1, 'month')
  time.value = t.date.toISOString()
}
function Format() {
  time.value = t.format('YYYY年MM月DD日')
}
function Lype() {
  
  if (t.isLeapYear()) {
    window.alert('今年是闰年')
  } else {
    window.alert('今年不是闰年')
  }
}
</script>

<template>
 <div>
  <div >
    {{ time }}
  </div>
  <div class="main">
    <button @click="addd">Add Mouth</button>
    <button @click="Format">Format(YYYY年MM月DD日)</button>
    <button @click="Lype">isLeapYear</button>
  </div>
  <div class="tip">Tip: 仅展示部分功能</div>
 </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}

.main button {
  margin: 4px;
}

.tip {
  text-align: center;
  margin-top: 200px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
