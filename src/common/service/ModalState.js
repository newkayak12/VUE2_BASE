class ModalState{
    constructor(store) {
        this.$store = store
    }
    //closeModal
    closeModal(){
        this.$store.dispatch('closeModal')
    }
    //alert
    alert(_modalName ={}, _modalTitle ='', _data = {},_isFooter=false, _callBack = ()=>{}, _isClose=false ){
        const isAlert = true
        const isHeader = modalTitle&&modalTitle!==""? true:false
        const isFooter = _isFooter
        const isClose = _isClose
        const modalName = _modalName
        const modalTitle = _modalTitle
        const modalContent={
            data:_data,
            alertCallBack : _callBack,
        }
        const payload = {
            isAlert:isAlert,
            isHeader:isHeader,
            isFooter:isFooter,
            isClose:isClose,
            modalName:modalName,
            modalTitle:modalTitle,
            modalContent:modalContent
        }
        this.$store.dispatch('setAlertModal', payload)
    }

    //confirm
    confirm(_modalName ={}, _modalTitle ='', _data = {},_isFooter=false, _positiveCallBack = ()=>{}, _negativeCallBack = ()=>{}, _isClose=false, _isBack=false) {
        const isConfirm = true
        const isHeader = modalTitle&&modalTitle!==""? true:false
        const isFooter = _isFooter
        const modalName = _modalName
        const modalTitle = _modalTitle
        const isClose = _isClose
        const isBack = _isBack
        const modalContent = {
            data:_data,
            confirmPositiveCallBack:_positiveCallBack(),
            confirmNegativeCallBack:_negativeCallBack(),
        }
        const payload = {
            isConfirm:isConfirm,
            isHeader:isHeader,
            isFooter:isFooter,
            isClose:isClose,
            isBack:isBack,
            modalName:modalName,
            modalTitle:modalTitle,
            modalContent:modalContent
        }
        this.$store.dispatch('setConfirmModal', payload)
    }
    //popup
    halfPopup(_modalName ={}, _modalTitle ='', _data = {},_isFooter=false, _isClose=false, _isBack=false){
        const isPopup = true
        const isHeader = modalTitle&&modalTitle!==""? true:false
        const isFull = false
        const isClose = _isClose
        const isBack = _isBack
        const modalName = _modalName
        const modalTitle = _modalTitle
        const modalContent = {
            data:_data,
        }
        const payload = {
            isPopup:isPopup,
            isHeader:isHeader,
            isFull:isFull,
            isBack:isBack,
            isClose:isClose,
            modalName:modalName,
            modalTitle:modalTitle,
            modalContent:modalContent
        }
        this.$store.dispatch('setPopupModel', payload)
    }
    fullPopup(_modalName ={}, _modalTitle ='', _data = {},_isFooter=false, _isClose=false, _isBack=false) {
        const isPopup = true
        const isHeader = modalTitle && modalTitle !== "" ? true : false
        const isFull = true
        const isClose = _isClose
        const isBack = _isBack
        const modalName = _modalName
        const modalTitle = _modalTitle
        const modalContent = {
            data: _data,
        }
        const payload = {
            isPopup:isPopup,
            isHeader:isHeader,
            isFull:isFull,
            isBack:isBack,
            isClose:isClose,
            modalName:modalName,
            modalTitle:modalTitle,
            modalContent:modalContent
        }
        this.$store.dispatch('setPopupModel', payload)
    }
}
export default ModalState