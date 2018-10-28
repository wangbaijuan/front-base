<template>
    <div>
        <div class="jumbotron">
            <h3>新建 Bug</h3>
            <!-- <form id="issueInputForm"> -->
            <form v-on:submit.prevent="formSubmit">
                <div class="form-group">
                    <label for="bug-desc">描述 </label>
                    <input id="bug-desc" v-model="bug.description" type="text" class="form-control" placeholder="描述这个问题..." >               
                </div>
                <div class="form-group">
                    <label for="bug-severity">级别 </label>
                    <select id="bug-severity" class="form-control" v-model="bug.severity">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select> 
                   
                </div>
                <div class="form-group">
                    <label for="bug-assignedTo">分配  </label>
                    <input id="bug-assignedTo" v-model="bug.assignedTo" type="text" class="form-control" placeholder="分配给谁 ...">
                </div>
                <!-- <button type="submit" class="btn btn-primary" @click="btnSubmit">Add</button> -->
                <button type="submit" class="btn btn-primary" >Add</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BugFrom',
    data () {
        return {
            bug: {},
        };
    },
    methods: {
        /* form > input click*/
        btnSubmit: function(e) {
            console.log('btn', e)
            console.log(this.bug.description)
            this.$emit('submit', this.bug);
        },

        /* form + submit(禁止默认行为) > input+submit or button
                    <form id="issueInputForm" v-on:submit.prevent="formSubmit">
        */
        formSubmit: function(e) {
            console.log('form', e)
            this.$emit('submit', this.bug);
        }
    }
}
</script>

<style>

</style>
