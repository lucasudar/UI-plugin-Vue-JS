const App = {
    data() {
        return {
            activeIndex: 0, // то, что позволяет определить текущий активный шаг
            steps: [
                {
                    title: 'Основы',
                    text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем всю базу фреймворка.'
                },
                {
                    title: 'Компоненты',
                    text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'
                },
                {
                    title: 'Роутер',
                    text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'
                },
                {
                    title: 'Vuex',
                    text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'
                },
                {
                    title: 'Composition',
                    text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
                },
            ],
            isFirst: true,
            isLast: false,
            isFinish: false,
            isNeedHide: false,
        }
    },
    methods: {
        prev() {
            this.activeIndex--
            if (this.activeIndex === 0) {
                this.isFirst = true
            }
            if (this.activeIndex !== this.steps.length - 1) {
                this.isFinish = false
            }
        },
        nextOfFinish() {
            this.activeIndex++
            this.isFirst = false
            if (this.activeIndex === this.steps.length - 1) {
                this.isLast = true
                this.isFinish = true
            }
        },
        setActive(idx) {
            this.activeIndex = idx
            this.isFirst = (idx > 0) ? false : true
            this.isFinish = (idx < this.steps.length - 1) ? false : true
        },
        finish() {
            this.isNeedHide = true
        },
        again() {
            this.activeIndex = 0
            this.isFirst = true
            this.isLast = false
            this.isFinish = false
            this.isNeedHide = false
        }
    },
}
Vue.createApp(App).mount('#app')