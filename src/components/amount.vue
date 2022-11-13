<template>
  <div class="amount">
    <button @click="handleClickDecrease">-</button>
    <input ref="input" v-model="native_value" readonly />
    <button @click="handleClickIncrease">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
    is_func: {
      type: Boolean,
      default: false,
    },
  },
  name: 'amount',
  data() {
    return {
      amount: 0,
    }
  },
  computed: {
    native_value() {
      return this.value === null || this.value === undefined ? 0 : this.value
    },
  },
  methods: {
    handleClickIncrease() {
      if (this.is_func) {
        this.$emit('increaseFunction')
      } else {
        if (this.native_value >= 0) {
          this.$emit('input', this.value + 1)
        }
      }
    },
    handleClickDecrease() {
      if (this.is_func) {
        this.$emit('decreaseFunction')
      } else {
        if (this.native_value > 0) {
          this.$emit('input', this.value - 1)
        }
      }
    },
  },
}
</script>
