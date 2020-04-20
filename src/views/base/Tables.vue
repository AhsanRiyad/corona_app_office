<template>
  <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper :items="array_data">
          <template #header>
            <CIcon name="cil-grid"/> Simple Table
            <div class="card-header-actions">
              <a 
              href="https://coreui.io/vue/docs/components/nav" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
              >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </template>
      </CTableWrapper>
    </CCol>

    <CCol lg="6">
      <CTableWrapper
      :items="array_data"
      striped
      caption="Striped Table"
      />
    </CCol>
  </CRow>

  <CRow>
    <CCol lg="6">
      <CTableWrapper
      :items="array_data"
      small
      caption="Condensed Table"
      />
    </CCol>

    <CCol lg="6">
      <CTableWrapper
      :items="array_data"
      fixed
      bordered
      caption="Bordered Table"
      />
    </CCol>
  </CRow>

  <CRow>
    <CCol sm="12">
      <CTableWrapper
      :items="array_data"
      hover
      striped
      bordered
      small
      fixed
      caption="Combined All Table"
      />
    </CCol>
  </CRow>

  <CRow>
    <CCol sm="12">
      <CTableWrapper
      :items="array_data"
      hover
      striped
      bordered
      small
      fixed
      dark
      caption="Combined All dark Table"
      />
    </CCol>
  </CRow>
</div>
</template>

<script>
  import CTableWrapper from './Table.vue'
  import usersData from '../users/UsersData'

  export default {
    name: 'Tables',
    components: { CTableWrapper },

    data: ()=>({
      name: 'Riyad',
      array_data: [],
    }),

    methods: {
      shuffleArray (array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1))
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
        return array
      },

      getShuffledUsersData() {

        let array =  [ { name: 'Riyad' } ];

        // return array;


        let new_promise = new Promise((resolve)=>{

          this.$axios.get( this.$store.state.base+'getAllAnotherInfo' , {

          } , this.$store.state.axios_headers )
          .then(function(response){
            console.log(response);
            this.array_data = response.data;
            resolve(this.array_data);

          }.bind(this))
          .catch(function(){

          }.bind(this));   


        });



        // return this.shuffleArray(array.slice(0));
        // return this.shuffleArray(usersData.slice(0))
      },
      getData(){

       this.$axios.get( this.$store.state.base+'getAllAnotherInfo' , {

       } , this.$store.state.axios_headers )
       .then(function(response){
        console.log(response);
        this.array_data = response.data;

      }.bind(this))
       .catch(function () {

       }.bind(this)); 


     }

   },
   created(){

    this.getData();

  }

}
</script>
