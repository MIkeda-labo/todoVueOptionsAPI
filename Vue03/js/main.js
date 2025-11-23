import ToDoItem from '../components/ToDoItem.vue'

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

app.component("todo-item", ToDoItem)

app.mount("#app")