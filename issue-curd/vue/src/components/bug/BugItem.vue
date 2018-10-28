<template>
<div class="col-lg-12 mb-1">
    <div class="shadow-lg p-3 bg-light rounded">
        <h6>问题 ID: {{bug.id}}</h6>
        <p><span class="badge" :class="[bug.status === 'Open' ? 'badge-success': 'badge-danger']" >{{bug.status}}</span></p>
        <h3>{{bug.description}}</h3>
        <p><span class="glyphicon glyphicon-time"></span>{{bug.severity}}
        <span class="glyphicon glyphicon-user"></span>{{bug.assignedTo}}</p>
        <button class="btn btn-warning mr-1" @click="$emit('close', bug.id)">Close</button>
        <button class="btn btn-danger" @click="$emit('remove', bug.id)">Delete</button>
    </div>
</div>
   
</template>

<script>
export default {
    
    name: 'BugItem',
    props: {
        bug: {
            type: Object,
            require: true
        }
    }
}
</script>

<style>

</style>
