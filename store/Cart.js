export default {
  state() {
    return {
      Cart: []
      // Cart结构
      /* 
        Cart = {
        id: "", // #
        productID: "", // 商品id
        productName: "", // 商品名称
        attribute: "",  //外观
        Supplier: "", //供货商
        price: "", // 商品价格
        num: "", // 商品数量
        maxNum: "", // 商品限购数量
        check: false // 是否勾选
      } */
    }
  },
  getters: {
    getCart(state) {
      // 获取购物车状态
      return state.Cart;
    },
    getNum(state) {
      // 购物车商品总数量
      let totalNum = 0;
      for (let i = 0; i < state.Cart.length; i++) {
        const temp = state.Cart[i];
        totalNum += temp.num;
      }
      return totalNum;
    },
    getCheckGoods(state) {
      // 获取商品信息用于确认订单
      let checkGoods = [];
      for (let i = 0; i < state.Cart.length; i++) {
        const temp = state.Cart[i];
        if (temp.check) {
          checkGoods.push(temp);
        }
      }
      return checkGoods;
    },
    getCheckNum(state) {
      // 获取购物车勾选的商品数量
      let totalNum = 0;
      for (let i = 0; i < state.Cart.length; i++) {
        const temp = state.Cart[i];
        if (temp.check) {
          totalNum += temp.num;
        }
      }
      return totalNum;
    },
    getTotalPrice(state) {
      // 购物车勾选的商品总价格
      return state.Cart.reduce((previousValue, currentValue) => {
        return previousValue+currentValue.amount*currentValue.price
      }, 0)
    }
  },
  mutations: {
    setCart(state, data) {
      // 设置购物车状态
      state.Cart = data;
    },
    unshiftCart(state, data) {
      // 添加购物车
      // 用于在商品详情页点击添加购物车,后台添加成功后，更新vuex状态
      state.Cart.unshift(data);
    },
    updateCart(state, payload) {
      // 更新购物车
      // 可更新商品数量和是否勾选
      // 用于购物车点击勾选及加减商品数量
      if (payload.prop == "num") {
        // 判断效果的商品数量是否小于1
        if (payload.val < 1) {
          return;
        }
      }
      // 根据商品在购物车的数组的索引和属性更改
      state.Cart[payload.key][payload.prop] = payload.val;
    },
    addCart(state, data) {
      const item = state.Cart.find(e => e.itemId == data.itemId);
      if (item) {
        const temp =parseInt(item.amount)+parseInt(data.amount);
        if (temp > item.stock) {
          return false;
        } else {
          item.amount = temp;
        }
      } else {
        data.amount = parseInt(data.amount)
        data.price = parseFloat(data.price)
        state.Cart.push(data)
      }
    },
    minusItem(state, index) {
      state.Cart[index].amount--;
    },
    plusItem(state, index) {
      state.Cart[index].amount++;
    }
  },
  actions: {
    setCart({
      commit
    }, data) {
      commit('setCart', data);
    },
    addCart({
      commit
    }, data) {
      commit('addCart', data);
    },
    updateCart({
      commit
    }, payload) {
      commit('updateCart', payload);
    },
  }
}
