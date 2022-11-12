<template>
  <div class="amount">
    <button @click="handleClickDecrease">-</button>
    <input v-model="amount" readonly />
    <button @click="handleClickIncrease">+</button>
  </div>
</template>

<script>
export default {
  name: 'amount',
  data() {
    return {
      amount: 0,
    }
  },
  methods: {
    handleClickDecrease() {
      if (this.amount > 0) {
        this.amount--
      }
    },
    handleClickIncrease() {
      if (this.amount >= 0) {
        this.amount++
      }
    },
  },
}
</script>
