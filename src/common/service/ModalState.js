class ModalState{
    constructor(store) {
        this.$store = store
    }
    //closeModal
    closeModal(){
        this.$store.dispatch('layout/closeModal')
    }
    //alert
    alert(_modalTitle ='', _contents = '',_isFooter=false, _callBack = ()=>{}, _isClose=false ){
        const isAlert = true
        const isHeader = _modalTitle&&_modalTitle!==""? true:false
        const isFooter = _isFooter
        const isClose = _isClose
        const modalTitle = _modalTitle
        const modalContent={
            data:{
                contents:_contents
            },
            alertCallBack : _callBack,
        }
        const payload = {
            isAlert:isAlert,
            isHeader:isHeader,
            isFooter:isFooter,
            isClose:isClose,
            modalTitle:modalTitle,
            modalContent:modalContent
        }
        this.$store.dispatch('layout/setAlertModal', payload)
    }

    //confirm
    confirm( _modalTitle ='', _data = {},_isFooter=false, _positiveCallBack = ()=>{}, _negativeCallBack = ()=>{}, _isClose=false, _isFull=false) {
        const isConfirm = true
        const isHeader = modalTitle&&modalTitle!==""? true:false
        const isFooter = _isFooter
        const isFull = _isFull
        const modalTitle = _modalTitle
        const isClose = _isClose
        const modalContent = {
            data:_data,
            confirmPositiveCallBack:_positiveCallBack(),
            confirmNegativeCallBack:_negativeCallBack(),
        }
        const payload = {
            isConfirm:isConfirm,
            isHeader:isHeader,
            isFooter:isFooter,
            isFull:isFull,
            isClose:isClose,
            modalTitle:modalTitle,
            modalContent:modalContent
        }
        this.$store.dispatch('layout/setConfirmModal', payload)
    }
    //popup
    defaultPopup(_modalName ={}, _modalTitle ='', _data = {},_isFooter=false, _isClose=false, _isBack=false){
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
        this.$store.dispatch('layout/setPopupModel', payload)
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
        this.$store.dispatch('layout/setPopupModel', payload)
    }
}
export default ModalState