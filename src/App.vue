<template>
  <div class="app">
    <section class="hkbj-calculator__container">
      <div class="hkbj-calculator__header">
        <div class="hkbj-calculator__header--wrap">
          <font-awesome-icon class="settings left" icon="fa-rotate" @click="handleResetCart" />
          <h1 class="hkbj-calculator__header-title"><strong>홍콩반점</strong> 계산기({{ human_cnt }}명)</h1>
          <font-awesome-icon class="settings" icon="fa-gear" @click="is_config_open = !is_config_open" />
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
            <p>메뉴 합산 금액 : {{ Number(cart_amount).toLocaleString() }} 원</p>
            <p>차액 : {{ Number(used_amount).toLocaleString() }} 원</p>
          </div>
        </div>
        <div class="hkbj-calculator__cart__menu-list--wrap">
          <p style="font-size: 3vw; color: rosybrown; margin-bottom: 16px">메뉴를 제거하고 싶으면, 메뉴명을 클릭하거나 메뉴판에서 메뉴를 눌러주세요</p>
          <ul class="hkbj-calculator__cart__menu-list">
            <li class="hkbj-calculator__cart__menu-list-item" v-for="item in cart_list" :key="item.id">
              <span @click="handleClickDeleteCartItem(item.id)"
                >{{ item.title }}<span :style="item.amount <= used_amount ? 'color: green' : 'color: red'">({{ Number(item.amount).toLocaleString() }}원)</span></span
              >
              <div class="hkbj-calculator__cart__menu-list-item__right-area">
                <span>{{ Number(item.amount * item.count).toLocaleString() }}원</span>
                <amount
                  v-model="item.count"
                  is_func
                  @increaseFunction="handleClickCartItemCountUp(item)"
                  @decreaseFunction="handleClickCartItemCountDown(item)"
                  :decrease-disabled="item.count === 0"
                  :increase-disabled="item.amount > used_amount"
                />
              </div>
            </li>
          </ul>
        </div>
      </article>
      <div class="hkbj-calculator__config" :class="{ 'is-open': is_config_open }">
        <div class="item cover">
          <div>
            <strong>인원수</strong>
            <font-awesome-icon icon="fa-solid fa-rotate" style="margin-left: 8px" @click="handleResetHumanCnt" />
          </div>
          <amount v-model="human_cnt" :decrease-disabled="human_cnt === 0" />
        </div>
        <div class="cover">
          <div style="margin-top: 16px">
            <strong>메뉴 금액 변경</strong>
            <font-awesome-icon icon="fa-solid fa-rotate" style="margin-left: 8px" @click="handleResetMenu" />
          </div>
          <div style="padding: 0 16px" v-for="item in menu_list" :key="'settings_' + item.id">
            <div style="text-align: center">
              <strong style="font-size: 14px">{{ item.title }}</strong>
            </div>
            <div class="item" v-for="m in item.list" :key="'settings_item_' + m.id">
              <span>{{ m.title }}</span>
              <input style="text-align: right" v-model="m.amount" />
            </div>
          </div>
        </div>
      </div>
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
      is_config_open: false,
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
    this.menu_list = this.deepCopy(hkbj_menus)
  },
  methods: {
    handleResetHumanCnt() {
      this.human_cnt = 1
    },
    handleResetMenu() {
      this.menu_list = this.deepCopy(hkbj_menus)
    },
    handleResetCart() {
      this.cart_list = []
      this.menu_list.forEach((item) => {
        item.list.forEach((data) => {
          data.is_selected = false
        })
      })
    },
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
    deepCopy(obj) {
      if (typeof obj !== 'object' || obj === null) {
        return obj
      }

      if (obj instanceof Array) {
        return obj.reduce((arr, item, i) => {
          arr[i] = this.deepCopy(item)
          return arr
        }, [])
      }

      if (obj instanceof Object) {
        return Object.keys(obj).reduce((newObj, key) => {
          newObj[key] = this.deepCopy(obj[key])
          return newObj
        }, {})
      }
    },
    handleClickUp() {
      this.human_cnt++
    },
    handleClickDown() {
      this.human_cnt--
    },
  },
}
</script>
