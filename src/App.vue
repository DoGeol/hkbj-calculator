<template>
  <div class="app">
    <section class="hkbj-calculator__container">
      <h1 class="hkbj-calculator__title"><strong>홍콩반점</strong> 계산기</h1>
      <article class="hkbj-calculator__window">
        <div class="hkbj-calculator__menu">
          <div class="hkbj-calculator__menu-area">
            <h3 class="hkbj-calculator__menu-area__title">◆ 면류 / 밥류 ◆</h3>
            <div class="hkbj-calculator__menu-list">
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
            </div>
          </div>
          <div class="hkbj-calculator__menu-area">
            <h3 class="hkbj-calculator__menu-area__title">◆ 튀김류 ◆</h3>
            <div class="hkbj-calculator__menu-list">
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
              <div class="hkbj-calculator__menu-list-item"><span>짜장면</span><span>5,000</span></div>
            </div>
          </div>
        </div>
      </article>
      <article class="hkbj-calculator__cart" :class="[{ is_open: is_cart_open }]">
        <div class="hkbj-calculator__cart__total-amount" @click="handleClickCart">
          <div class="hkbj-calculator__cart__total-amount-area">
            <p>총 금액 : {{ Number(total_amount).toLocaleString() }}원</p>
          </div>
        </div>
        <div class="hkbj-calculator__cart__menu-list--wrap">
          <ul class="hkbj-calculator__cart__menu-list">
            <li class="hkbj-calculator__cart__menu-list-item">
              <span>메뉴이름</span>
              <div class="hkbj-calculator__cart__menu-list-item__right-area">
                <span>{{ Number(40000).toLocaleString() }}원</span>
                <amount />
                <button class="hkbj-calculator__cart__menu-list-item__delete">X</button>
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
export default {
  name: 'App',
  components: { Amount },
  data() {
    return {
      total_amount: 70000,
      is_cart_open: false,
    }
  },
  methods: {
    handleClickCart() {
      this.is_cart_open = !this.is_cart_open
    },
  },
}
</script>

<style lang="scss">
@import 'styles/color';

.hkbj-calculator {
  &__container {
    margin: 0 auto;
    background-color: $bg-color;
    height: 100vh;
    min-width: 280px;
    max-width: 768px;
  }

  &__title {
    font-size: 7.4688vw;
    text-align: center;
    background-color: #fd7230;
    color: white;
  }

  &__menu {
    color: white;
    background-color: #140d0b;
    height: calc(100vh - 100vh * 0.08);

    &-area {
      font-size: 0;
      padding: 4.0833vw 5.2083vw;
      &__title {
        font-size: 4.4688vw;
        text-align: center;
        margin-bottom: 2.0833vw;
      }
    }
  }

  &__menu-list {
    font-size: 4.4688vw;
    &-item {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      padding: 4px 8px;
      border: 1px solid white;

      &:nth-child(odd) {
        padding-right: 2.0833vw;
      }

      &:nth-child(even) {
        padding-left: 2.0833vw;
      }
    }
  }

  &__cart {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100vh * 0.08);
    border: 1px solid $priamry;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: $bg-color;
    overflow: hidden;

    transition: all 0.3s ease;

    &.is_open {
      height: calc(100vh * 0.5);
    }

    &__total-amount {
      color: $bg-color;
      height: calc(100vh * 0.08);
      border-bottom: 1px solid $priamry;
      background-color: $priamry-light;

      &-area {
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: 5.4688vw;
      }
    }

    &__menu-list {
      &--wrap {
        height: calc(100% - 100vh * 0.08);
        padding: 16px;
        overflow: auto;
      }

      &-item {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-top: 8px;

        &:first-child {
          margin-top: 0;
        }

        &__right-area {
          display: flex;
          justify-content: center;
          align-content: center;

          .amount {
            margin-left: 8px;
          }
        }

        &__delete {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
