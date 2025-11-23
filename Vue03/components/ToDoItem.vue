<template>
    <div>
        <input type="checkbox">
        <span>{{ task }}</span>
        <button v-on:click="handleDelete">Delete</button>
    </div>
</template>

<script>
export default {
    props: ['task'],
    methods: {
        handleDelete: function(){
            this.$emit('delete-task', this.task)
        }
    }
}
</script>