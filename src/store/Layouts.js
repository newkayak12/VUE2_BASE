import spinner from "@/layouts/spinner/Spinner";

export default({
    namespaced:true,
    state:{
        spinner: {
          isActive:false,
          spinnerColor:'#000'
        },
        modal:{
            isPopUp:false, //대부분을 커버할 모달
            isAlert:false, //확인만 있는
            isConfirm:false, //확인, 최소 있는 모달
            isHeader:false, //헤더가 있는가
            isFooter:false,
            isFull:false, //full 모달인가
            isBack:false, //뒤로 가기 버튼
            isClose:false, //닫기 버튼
            modalName:'', //모달이 무엇인가
            modalTitle:'', //모달 헤더의 타이틀 (헤더)
            modalContent:{
                data:{},//들어갈 데이터
                alertCallBack:()=>{},

                confirmPositiveCallBack:()=>{},
                confirmNegativeCallBack:()=>{}
            },
        },
        headerLayout:{
            title:'',
            isLogo:false,
            isBack:false,
            isHome:false
        }
    },
    mutations:{
        setTitle(state,{_title}){
            state.headerLayout.title = _title
        },
        setIsLogo(state,{_isLogo}){
            state.headerLayout.isLogo = _isLogo
        },
        setIsBack(state,{_isBack}){
            state.headerLayout.isBack = _isBack
        },
        setIsHome(state,{_isHome}){
            state.headerLayout.isHome=_isHome
        },
        setHeader(state, {title, isLogo, isBack, isHome}){
            state.headerLayout.title = title
            state.headerLayout.isLogo = isLogo
            state.headerLayout.isBack = isBack
            state.headerLayout.isHome=isHome
        },
        setAlertModal(state,{isAlert=true,
                            isHeader=false,
                            isFooter = false,
                            isClose=false,
                            modalTitle ='',
                            modalContent ={
                                data : {},
                                alertCallBack:()=>{}
                            }} ){
            state.modal.isAlert = isAlert
            state.modal.isPopUp = false
            state.modal.isConfirm = false
            state.modal.isHeader = isHeader
            state.modal.isFooter = isFooter
            state.modal.isClose = isClose
            state.modal.modalTitle = modalTitle
            state.modal.modalContent.data = modalContent.data
            state.modal.modalContent.alertCallBack = modalContent.alertCallBack
        },
        setConfirmModal(state,{isConfirm=true,
                                isHeader=false,
                                isFooter=false,
                                isFull =false,
                                isClose = false,
                                modalTitle ='',
                                modalContent ={
                                    data : {},
                                    confirmPositiveCallBack:()=>{},
                                    confirmNegativeCallBack:()=>{}
                                }} ){
            state.modal.isConfirm = isConfirm
            state.modal.isPopUp = false
            state.modal.isAlert = false
            state.modal.isHeader = isHeader
            state.modal.isFooter=isFooter
            state.modal.isFull = isFull
            state.modal.isClose = isClose
            state.modal.modalTitle = modalTitle
            state.modal.modalContent.data = modalContent.data
            state.modal.modalContent.confirmPositiveCallBack = modalContent.confirmPositiveCallBack
            state.modal.modalContent.confirmNegativeCallBack = modalContent.confirmNegativeCallBack
        },
        setPopupModal(state, {isPopup = true,
                                isHeader = false,
                                isFooter = false,
                                isFull = false,
                                isBack = false,
                                isClose = false,
                                modalName = '',
                                modalTitle = '',
                                modalContent = {
                                    data:{}
                                }
        }) {
            state.modal.isPopUp = isPopup
            state.modal.isConfirm = false
            state.modal.isAlert = false
            state.modal.isHeader = isHeader
            state.modal.isFooter = isFooter
            state.modal.isFull = isFull
            state.modal.isClose = isClose
            state.modal.isBack = isBack
            state.modal.modalName = modalName
            state.modal.modalTitle = modalTitle
            state.modal.modalContent.data = modalContent.data
            console.log("123")
        },
        closeModal(state){
            state.modal={
                    isPopUp:false,
                    isAlert:false,
                    isConfirm:false,
                    isHeader:false,
                    isFooter:false,
                    isFull:false,
                    isBack:false,
                    isClose:false,
                    modalName:'',
                    modalTitle:'',
                    modalContent:{
                    data:{},//들어갈 데이터
                    alertCallBack:()=>{},
                    confirmPositiveCallBack:()=>{},
                    confirmNegativeCallBack:()=>{}
                },
            }
        },
        startSpinner(state, {isActive= false, spinnerColor='#000'}){
            state.spinner.isActive = isActive
            console.log(spinnerColor)
            state.spinner.spinnerColor =spinnerColor
        },
        endSpinner(state){
            state.spinner.isActive = false
        }
    },
    actions:{
        setTitle({commit},{_title=''}){
            commit('setTitle',{_title})
        },
        setIsLogo({commit},{_isLogo=false}){
            commit('setIsLogo',{_isLogo})
        },
        setIsBack({commit},{_isBack=false}){
            commit('setIsBack',{_isBack})
        },
        setIsHome({commit},{_isHome=false}){
            commit('setIsHome',{_isHome})
        },
        setHeader({commit}, {title, isLogo, isBack, isHome}){

            commit('setHeader', {title:title, isLogo:isLogo,isBack:isBack,isHome:isHome})
        },
        setAlertModal({commit},{isAlert=true,
                                isHeader=false,
                                isFooter = false,
                                isClose =false,
                                modalTitle ='',
                                modalContent ={
                                        data : {},
                                        alertCallBack:()=>{}
                                    }} ){
            commit('setAlertModal',{
                isAlert:isAlert,
                isHeader:isHeader,
                isFooter:isFooter,
                isClose:isClose,
                modalTitle:modalTitle,
                modalContent:{
                    data:modalContent.data,
                    alertCallBack:modalContent.alertCallBack
                }
            })
        },
        setConfirmModal({commit},{isConfirm=true,
                        isHeader=false,
                        isFooter=false,
                        isFull =false,
                        isClose = false,
                        modalTitle ='',
                        modalContent ={
                            data : {},
                            confirmPositiveCallBack:()=>{},
                            confirmNegativeCallBack:()=>{}
                        }}){
            commit('setConfirmModal',{
                isConfirm:isConfirm,
                isHeader:isHeader,
                isFooter:isFooter,
                isFull:isFull,
                isClose:isClose,
                modalTitle:modalTitle,
                modalContent:{
                    data: modalContent.data,
                    confirmPositiveCallBack:modalContent.confirmPositiveCallBack,
                    confirmNegativeCallBack:modalContent.confirmNegativeCallBack
                }
            })
        },
        setPopupModal({commit},{ isPopup = true,
                        isHeader = false,
                        isFooter = false,
                        isFull = false,
                        isBack = false,
                        isClose = false,
                        modalName = '',
                        modalTitle = '',
                        modalContent = { data: {} }
        }) {

            commit('setPopupModal',{
                isPopup:isPopup,
                isHeader:isHeader,
                isFooter : isFooter,
                isFull:isFull,
                isBack:isBack,
                isClose:isClose,
                modalName:modalName,
                modalTitle:modalTitle,
                modalContent:{
                    data:modalContent.data
                }
            })
        },
        closeModal({commit}){
            commit('closeModal')
        },
        startSpinner({commit},{spinnerColor = '#000'}){
            console.log('dispatch', spinnerColor)
            commit('startSpinner',{isActive : true, spinnerColor : spinnerColor} )
        },
        endSpinner({commit}){
            commit('endSpinner')
        }
    },
    getters:{
        getModalState(state){
            return state.modal
        },
        getSpinner(state){
            return state.spinner
        },
        getHeader(state){return state.headerLayout}

    }
})