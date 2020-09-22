export const state = () => ({
    user: {

    }
})
  
export const mutations = {
    assignUser(state, payload){
        Object.assign(state.user, payload)
    }
}