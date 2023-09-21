<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="filter-bar">
                     <label for="type-select">Specializations</label>
                  <select name="type-select" id="type-select" v-model="search"
                    @change="$emit('filteredHunters', search)">
                        <option v-for="specialization in specializations" :value="specialization.name">
                             {{ specialization.name }}
                        </option>
                  </select>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HunterSelect',
    data() {
      return {
        specializations: [],
        search: '',
      };
    },
  
    methods: {
      getSpecializations() {
        axios.get('http://127.0.0.1:8000/api/specializations')
          .then((response) => {
            // handle success
            this.specializations = response.data.results;
            console.log(this.specializations);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      },
    },

    filterHunters() {
      this.$emit('filteredHunters', this.search);
    },
  
    created() {
      this.getSpecializations();
    },
  };
  </script>
  
  <style lang="scss"></style>
  