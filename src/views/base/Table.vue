<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid"/> {{caption}}
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
</template>




<script>



  
  export default {
    name: 'Table',
    props: {
      items: Array,
      fields: {
        type: Array,
        default () {
          return ['latitudeSender' , 'nearByBluetoothId', 'senderBluetoothId', 'longitudeSender' , 'senderTimestamp']
        }
      },
      caption: {
        type: String,
        default: 'Table'
      },
      hover: Boolean,
      striped: Boolean,
      bordered: Boolean,
      small: Boolean,
      fixed: Boolean,
      dark: Boolean
    },
    methods: {
      getBadge (status) {
        return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
        : status === 'Pending' ? 'warning'
        : status === 'Banned' ? 'danger' : 'primary'
      }
    }
  }
</script>
