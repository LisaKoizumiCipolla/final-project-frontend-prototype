import {reactive} from 'vue'

export const store = reactive({

    huntersList:[],

    specializationsList:[],

    searchValue:'',

    updateHuntersList(newList) {
        this.huntersList = newList;
    },

   
    
    
})