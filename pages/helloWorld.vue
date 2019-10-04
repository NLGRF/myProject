<template>
  <div class="container">
    <div>
      <h1 class="title">
        Hello World
      </h1>
      <div class="links">
        <buttonComponent />
        <p>{{dateTime}}</p>
        <date-picker
        placeholder="select date"
        format="DD/MM/YYYY"/>
      </div>
    </div>
  </div>
</template>

<script>
import buttonComponent from '~/components/button.vue'
export default {
    components: {
        buttonComponent,
    },
    name: "helloWorld",
    data() {
        return {
            dateTime: this.$moment()
        }
    },
    beforeMount() {
        this.setStore()
    },
    methods:{
        setStore() {
            this.$store.commit('SET_ADDRESS', { address: {
                    subDistrict: 'หายยา',
                    district: 'เมือง',
                    province: 'เชียงใหม่',
                    zipCode: '50100',
                }
            })
            console.log('address: ', this.$store.state.address);
        }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.links {
  padding-top: 15px;
}
</style>
