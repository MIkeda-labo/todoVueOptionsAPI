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
        },
        deleteTask : function(taskToDelete){
            const index = this.tasks.indexOf(taskToDelete)
            if(index !== -1){
                this.tasks.splice(index,1)
            }
        }
    }
})

app.component("todo-item", {
    props: ['task'],
    methods: {
        handleDelete: function(){
            this.$emit('delete-task', this.task)
        }
    },
    template : `
    <div>
        <input type="checkbox">
        <span>{{ task }}</span>
        <button v-on:click="handleDelete">Delete</button>
    </div>`
})

app.mount("#app")