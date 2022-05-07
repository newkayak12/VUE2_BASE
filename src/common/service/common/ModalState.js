class ModalState{
    constructor(store) {
        this.$store = store
    }
    //closeModal
    closeModal(){
        this.$store.dispatch('layout/closeModal')
    }
    //alert
    alert(_modalTitle ='', _contents = '', _isClose=false,
          _closeLetter="확인", _callBack = ()=>{}){
        const isAlert = true
        const isHeader = _modalTitle&&_modalTitle!==""? true:false || _isClose
        const isFooter = _closeLetter&&_closeLetter!==""? true:false ||_closeLetter
        const isClose = _isClose
        const modalTitle = _modalTitle
        const modalContent={
            data:{
                contents:_contents,
                closeLetter:_closeLetter
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
    confirm( _modalTitle ='', _contents = "", _isClose=false,
             _isFull=false, _positiveCloseLetter="확인", _negativeCloseLetter="취소",
             _positiveCallBack = ()=>{}, _negativeCallBack = ()=>{}) {
        const isConfirm = true
        const isHeader = _modalTitle&&_modalTitle!==""? true:false || _isClose
        const isFooter = _positiveCloseLetter&&_positiveCloseLetter!==""||_negativeCloseLetter&&_negativeCloseLetter!==""?true:false
        const isFull = _isFull
        const modalTitle = _modalTitle
        const isClose = _isClose
        const modalContent = {
            data:{
                contents:_contents,
                positiveCloseLetter:_positiveCloseLetter,
                negativeCloseLetter:_negativeCloseLetter
            },
            confirmPositiveCallBack:_positiveCallBack,
            confirmNegativeCallBack:_negativeCallBack,
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
    defaultPopup(_modalName ={}, _modalTitle ='', _data = {},
                 _isClose=false, _isBack=false){
        const isPopup = true
        const isHeader = _modalTitle&&_modalTitle!==""? true:false || _isClose || _isBack
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
        console.log("PAYLOAD", payload)
        this.$store.dispatch('layout/setPopupModal', payload)
    }
    fullPopup(_modalName ={}, _modalTitle ='', _data = {},
              _isClose=false, _isBack=false) {
        const isPopup = true
        const isHeader = _modalTitle && _modalTitle !== "" ? true : false || _isClose || _isBack
        const modalTitle = _modalTitle
        const isClose = _isClose
        const isBack = _isBack
        const isFull = true
        const modalName = _modalName
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
        this.$store.dispatch('layout/setPopupModal', payload)
    }
}
export default ModalState