export default ({
    namespaced:true,
    state:{
        // vue의 data와 같은 곳
        userData:{
            userNo:'',
            userId:'',
            userNickname:'',
            userRegDate:'',
            userLastSignedDate:''
        },
        accessToken:'',
        refreshToken:''
    },
    actions:{
        setAuthorization(commit, {authorization='', refreshToken=''}){
            commit('setAuthorization', {authorization, refreshToken})
            localStorage.setItem("accessToken", authorization)
            localStorage.setItem("refreshToken", refreshToken)
        },
        setUserData(commit, {userData={
            userNo:'',
            userId:'',
            userNickname:'',
            userRegDate:'',
            userLastSignedDate:''}}){

            localStorage.setItem('userData', JSON.stringify(userData))
            commit('setUserData', userData)
        }

    },
    mutations:{
        // setter
        setAuthorization(state, {authorization='', refreshToken=''}){
            state.accessToken = authorization
            state.refreshToken = refreshToken
        },
        setUserData(state, {userData={
            userNo:'',
            userId:'',
            userNickname:'',
            userRegDate:'',
            userLastSignedDate:''}}){
            state.userData.userNo = userData.userNo
            state.userData.userId = userData.userId
            state.userData.userNickname = userData.userNickname
            state.userData.userRegDate = userData.userRegDate
            state.userData.userLastSignedDate = userData.userLastSignedDate
        }
    },
    getters:{
        getAuthorization(state){
            return state.accessToken || localStorage.getItem('accessToken')
        },
        getRefreshToken(state){
            return state.refreshToken || localStorage.getItem("refreshToken")
        },
        getUserData(state){
            return state.userData || localStorage.getItem('userData')
        }
    },
})