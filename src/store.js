import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
    state: {
        //存放组件之间共享的数据

        name: "HL",

        age: 17,

        num: 1
    },

    mutations: {
        //显式的更改state里的数据

        change: function(state, a) {
            console.log((state.num += a));
        },

        changeAsync: function(state, a) {
            console.log((state.num += a));
        }
    },

    getters: {
        //过滤state数据

        getAge: function(state) {
            if (state.age > 18) return state.age;
            else state.age = "未成年";

            return state.age;
        }
    },

    actions: {
        //设置延时

        add: function(context, value) {
            setTimeout(function() {
                //提交事件

                context.commit("changeAsync", value); //context：context 是与 store 实例具有相同方法和属性的对象。

                // 可以通过context.state和context.getters 来获取 state 和 getters。
            }, 1000);
        }
    }
});