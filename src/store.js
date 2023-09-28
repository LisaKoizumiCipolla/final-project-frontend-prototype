import {reactive} from 'vue'

export const store = reactive({

    huntersList:[],

    specializationsList:[],

    searchValue:'',

    sponsor:[],

    updateHuntersList(newList) {
        this.huntersList = newList;
    },

   
    
    
})