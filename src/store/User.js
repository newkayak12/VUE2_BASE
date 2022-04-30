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
        token:''
    },
    mutations:{
        // setter
        setAuthorization(state, {authorization=''}){
            state.token = authorization
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
            return state.token || localStorage.getItem('token')
        },
        getUserData(state){
            return state.userData || localStorage.getItem('userData')
        }
    },
})