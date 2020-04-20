<template>
  <div>

    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" header="9.823" text="Members online">
        <template #default>
          
        </template>
        <template #footer>
          <CChartLineSimple
          pointed
          class="mt-3 mx-3"
          style="height:70px"
          :data-points="[65, 59, 84, 84, 51, 55, 40]"
          point-hover-background-color="primary"
          label="Members"
          labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>




    <CCard>
      <CCardHeader>
        <slot name="header">
          <CIcon name="cil-grid"/> Daily Data
        </slot>
      </CCardHeader>
      <CCardBody>
        <CDataTable
        table-filter
        items-per-page-select
        :hover="hover"
        :striped="striped"
        :bordered="bordered"
        :small="small"
        :fixed="fixed"
        :items="items"
        :fields="fields"
        :items-per-page="small ? 10 : 5"
        :dark="dark"
        pagination
        >

      </CDataTable>
    </CCardBody>
  </CCard>


</div>
</template>

<script>
  //base required
  import MainChartExample from './charts/MainChartExample'
  import WidgetsDropdown from './widgets/WidgetsDropdown'
  import WidgetsBrand from './widgets/WidgetsBrand'

//required
import { CChartLineSimple, CChartBarSimple } from '@/views/charts/index.js'

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,

    //charts data 
    CChartLineSimple,
    CChartBarSimple
  },
  data () {
    return {

      //table data
      items: [],
      fields: ['latitudeSender' , 'nearByBluetoothId', 'senderBluetoothId', 'longitudeSender' , 'senderTimestamp'],
      caption: 'Table',
      hover: true,
      striped: true,
      bordered: true,
      small: true,
      fixed: true,
      dark: false,


      //daily update
      daily_update: {},



    }
  },
  methods: {
    getData(){

     this.$axios.get( this.$store.state.base+'getAllAnotherInfo' , {
     } , this.$store.state.axios_headers )
     .then(function(response){
      console.log(response);
      this.items = response.data;
    }.bind(this))
     .catch(function () {
     }.bind(this)); 


     this.$axios.get( this.$store.state.base+'getDailyCoronaUpdates' , {
     } , this.$store.state.axios_headers )
     .then(function(response){
      console.log(response);
      this.daily_update = response.data[0];
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
