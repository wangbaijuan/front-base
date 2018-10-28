<template>
    <div class="container">
        <h1> Bug 管理</h1>
        <BugForm @submit="add">

        </BugForm>

        <div class="row">
             <BugItem
                    v-for="item in bugs" 
                    :key="item.id"
                    :bug="item"
                    @close="close"
                    @remove="remove"
                    >
            </BugItem>

            <!-- <ModalDelete 
                :modalId="1"
                @delete="deleteBug" 
                :recordId="deleteId"
                :title="Bug"> -->
        </div>
    </div>
</template>

<script>

import BugForm from "~/components/bug/BugForm";
import BugItem from "~/components/bug/BugItem";
// import ModalDelete from "~/components/ModalDelete";
export default {
    name : "bug",
    components: {
        BugForm,BugItem,
        // ModalDelete
    },
    data(){
        return {
            bug:{},
            bugs: []
        }
    },
    methods: {
        add(bug) {
            console.log('index.vue add bug', bug.description);
        },
        remove(id){
            console.log("remove:" + id);
        },
        close(id) {
            console.log("close:" + id)
        }

    },
    created() {
        this.bugs = [
            {
                id: "1",
                description: "desc1",
                severity: "low",
                status: "Open",
                assignedTo:"shaonian"
            },
             {
                id: "2",
                description: "desc1",
                severity: "low",
                status: "Close",
                assignedTo:"shaonian"
            }
        ]
    },

}
</script>

<style>

</style>
