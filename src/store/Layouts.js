export default({
    namespace:true,
    state:{
        spinner:false,
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
        }
    },
    mutations:{
        setAlertModal(state,{isAlert=true,
                            isHeader=false,
                            isClose=false,
                            isFooter = false,
                            modalName='',
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
            state.modal.modalName = modalName
            state.modal.modalTitle = modalTitle
            state.modal.modalContent.data = modalContent.data
            state.modal.modalContent.alertCallBack = modalContent.alertCallBack

        },
        setConfirmModal(state,{isConfirm=true,
                                isHeader=false,
                                isFooter=false,
                                isFull =false,
                                isBack =false,
                                isClose = false,
                                modalName='',
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
            state.modal.isBack = isBack
            state.modal.modalName = modalName
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
            state.modal.isPopup = isPopup
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
        startSpinner(state){
            state.spinner=true
        },
        endSpinner(state){
            state.spinner=false
        }
    },
    actions:{
        setAlertModal({isAlert=true,
                        isHeader=false,
                        isFooter = false,
                        isClose =false,
                        modalName='',
                        modalTitle ='',
                        modalContent ={
                                data : {},
                                alertCallBack:()=>{}
                            }} ){
            this.commit('setAlertModal',{
                isAlert:isAlert,
                isHeader:isHeader,
                isFooter:isFooter,
                isClose:isClose,
                modalName:modalName,
                modalTitle:modalTitle,
                modalContent:{
                    data:modalContent.data,
                    alertCallBack:modalContent.alertCallBack
                }
            })
        },
        setConfirmModal({isConfirm=true,
                        isHeader=false,
                        isFooter=false,
                        isFull =false,
                        isBack =false,
                        isClose = false,
                        modalName='',
                        modalTitle ='',
                        modalContent ={
                            data : {},
                            confirmPositiveCallBack:()=>{},
                            confirmNegativeCallBack:()=>{}
                        }}){
            this.commit('setConfirmModal',{
                isConfirm:isConfirm,
                isHeader:isHeader,
                isFooter:isFooter,
                isFull:isFull,
                isBack:isBack,
                isClose:isClose,
                modalName:modalName,
                modalTitle:modalTitle,
                modalContent:{
                    data: modalContent.data,
                    confirmPositiveCallBack:modalContent.confirmPositiveCallBack,
                    confirmNegativeCallBack:modalContent.confirmNegativeCallBack
                }
            })
        },
        setPopupModal({ isPopup = true,
                        isHeader = false,
                        isFooter = false,
                        isFull = false,
                        isBack = false,
                        isClose = false,
                        modalName = '',
                        modalTitle = '',
                        modalContent = {
                data: {}
            }
        }) {
            this.commit('setPopupModal',{
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
        closeModal(){
            this.commit('closeModal')
        },
        startSpinner(){
            this.commit('startSpinner')
        },
        endSpinner(){
            this.commit('endSpinner')
        }
    },
    getters:{
        getModalState(state){
            return state.modal
        },
        getSpinner(state){
            return state.spinner
        }

    }
})