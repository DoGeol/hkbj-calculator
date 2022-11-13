<template>
  <div class="app">
    <section class="hkbj-calculator__container">
      <div class="hkbj-calculator__header">
        <h1 class="hkbj-calculator__header-title" @click="is_config_open = !is_config_open"><strong>홍콩반점</strong> 계산기({{ human_cnt }})</h1>
        <div class="hkbj-calculator__header-config" :class="{ 'is-open': is_config_open }">
          인원수
          <amount v-model="human_cnt" />
        </div>
      </div>
      <article class="hkbj-calculator__window">
        <div class="hkbj-calculator__menu">
          <div class="hkbj-calculator__menu-area" v-for="menu in menu_list" :key="`cagtegory-${menu.id}`">
            <h3 class="hkbj-calculator__menu-area__title">{{ menu.title }}</h3>
            <div class="hkbj-calculator__menu-list">
              <div
                class="hkbj-calculator__menu-list-item"
                :class="[{ 'is-selected': item.is_selected }, { 'is-limit': checkLimit(item) }]"
                v-for="item in menu.list"
                :key="`cagtegory-${menu.id}_${item.id}`"
                @click="handleClickToggleItem(item)"
              >
                <span>{{ item.title }}</span
                ><span>{{ Number(item.amount).toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="hkbj-calculator__cart" :class="[{ is_open: is_cart_open }]">
        <div class="hkbj-calculator__cart__total-amount" @click="handleClickCart">
          <div class="hkbj-calculator__cart__total-amount-area">
            <p>가용 금액 : {{ Number(used_amount).toLocaleString() }} 원</p>
          </div>
        </div>
        <div class="hkbj-calculator__cart__menu-list--wrap">
          <p style="font-size: 3vw; color: rosybrown; margin-bottom: 16px">메뉴를 제거하고 싶으면, 메뉴명을 클릭하거나 메뉴판에서 메뉴를 눌러주세요</p>
          <ul class="hkbj-calculator__cart__menu-list">
            <li class="hkbj-calculator__cart__menu-list-item" v-for="item in cart_list" :key="item.id">
              <span @click="handleClickDeleteCartItem(item.id)">{{ item.title }}({{ Number(item.amount).toLocaleString() }}원)</span>
              <div class="hkbj-calculator__cart__menu-list-item__right-area">
                <span>{{ Number(item.amount * item.count).toLocaleString() }}원</span>
                <amount v-model="item.count" is_func @increaseFunction="handleClickCartItemCountUp(item)" @decreaseFunction="handleClickCartItemCountDown(item)" />
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Amount from '@/components/amount'
import { hkbj_menus } from './data/menu'

export default {
  name: 'App',
  components: { Amount },
  data() {
    return {
      human_unit_amount: 10000,
      human_cnt: 1,
      is_cart_open: false,
      is_config_open: true,
      menu_list: [],
      cart_list: [],
    }
  },
  computed: {
    available_amount() {
      return this.human_cnt * this.human_unit_amount
    },
    cart_amount() {
      return this.cart_list.reduce((result, item) => {
        return result + item.amount * item.count
      }, 0)
    },
    used_amount() {
      return this.available_amount - this.cart_amount
    },
  },
  created() {
    this.menu_list = hkbj_menus
  },
  methods: {
    checkLimit(item) {
      return this.used_amount < item.amount
    },
    handleClickCart() {
      this.is_cart_open = !this.is_cart_open
    },
    handleClickToggleItem(item) {
      if (!item.is_selected) {
        this.handleClickAddCardItem(item)
      } else {
        this.handleClickDeleteCartItem(item.id)
      }
    },
    handleClickAddCardItem(item) {
      if (!item.is_selected && item.amount <= this.used_amount && !this.cart_list.some((c_item) => item.id === c_item.id)) {
        item.is_selected = true
        item.count = 1
        this.cart_list.push(item)
      }
    },
    handleClickDeleteCartItem(id) {
      this.cart_list = this.cart_list.filter((c_item) => {
        if (id === c_item.id) {
          c_item.is_selected = false
          c_item.count = 0
        }
        return id !== c_item.id
      })
    },
    handleClickCartItemCountUp(item) {
      if (item.amount <= this.used_amount) {
        item.count++
      }
    },
    handleClickCartItemCountDown(item) {
      if (item.count >= 1) {
        item.count--
      }
    },
  },
}
</script>
