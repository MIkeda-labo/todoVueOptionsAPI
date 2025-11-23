const app = Vue.createApp({
    data : () => ({
        title : "TO DO APPLI",
        inputText : "",
        tasks : [],
        is_checked : false,
    }),
    methods : {
        onClick : function(){
            this.message = this.inputText
            this.tasks.push(this.inputText)
        }
    }
})

app.component("todo-item", {
    props: ['task'],
    template : `
    <div>
        <input type="checkbox">
        <span>{{ task }}</span>
    </div>`
})

app.mount("#app")