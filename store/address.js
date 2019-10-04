const state = {
  address: {
    subDistrict: '',
    district: '',
    province: '',
    zipCode: '',
  },
}

const mutations = {
  SET_ADDRESS(state, { address = state.address, }) {
    state.address = {
      subDistrict: address.subDistrict,
      district: address.district,
      province: address.province,
      zipCode: address.zipCode,
    }
  },
}

export default {
  state,
  mutations,
}
