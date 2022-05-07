## Vue2-Base

### - basic : Env.json
```json
{
  "PROJECT_NAME":"", // 프로젝트 이믊
  "FIRST_MAIN_THEME_COLOR":"red", // 메인 색
  "SECOND_MAIN_THEME_COLOR":"pink" // 서브 색상
}

```

### -  header : router.js
```javascript 

 const routes = [
    {
        path: '/',
        component:Main,
        meta:{
                title:'HOME', //meta (헤더 설정)
                isLogo:true, //title:타이틀 (중간)
                isBack:false, //isLogo:로고노출 (좌측 상단)
                isHome:false //isBack:뒤로 가기 (좌측 상단)
        }
    }
]
```

### - footer : common/FooterContorl.js
```js
const footer =[
 {
  title:'1', //푸터 타이틀
  image:require('@/assets/static/necessaries/logo.png'), // 사진
  url:'/router' //url
 },
]
```

### - Modal : service/common/ModalState.js
- close Modal
```js
    closeModal(){
        this.$store.dispatch('layout/closeModal')
    }
    
    //Call: this.$ModalSdtate.closeModal()
```
- alert Modal
```js
    //alert
    alert(_modalTitle ='', _contents = '',_isFooter=false, _closeLetter="확인", _callBack = ()=>{}){
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

    //Call :  this.$ModalState.alert(//모달 타이틀, //모달 내용, //우측 상단 닫기 여부, //푸터 버튼 글자, //콜백 함수 )
```
```js
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
    
    // Call :  confirm( // 모달 헤더 타이틀, // 내용, // 닫기 , //전체 화면 여부,
    //확인  글자, //취소 글자, //확인 콜백, //취소 콜백)
```    
```js
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
    
    // Call : this.$ModalState. defaultPopup(모달 내용, 모달 제목, 모달 컴포넌트로 넘길 데이터,
    // 닫기 버튼 여부, 뒤로가기 버튼 여부)
```
```js
    fullPopup(_modalName ={}, _modalTitle ='', _data = {},_isFooter=false,
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
    // Call : this.$ModalState. defaultPopup(모달 내용, 모달 제목, 모달 컴포넌트로 넘길 데이터,
    // 닫기 버튼 여부, 뒤로가기 버튼 여부)
```
### - Spinner : service.common.SpinnerState.js
```js
 activeSpinner(first=true){
        if(first){ //Env에서 정한 색 중 메인색:  true, 서브 컬러 false
            return this.$store.dispatch('layout/startSpinner', {spinnerColor: Constants.MAIN_THEME_COLOR.FIRST})
        }
        return this.$store.dispatch('layout/startSpinner', {spinnerColor: Constants.MAIN_THEME_COLOR.SECOND})
    }
    //Call : this.$SpinnerState.activeSpinner(true/false)
    

    deActiveSpinner(){ //  스피너 비활성화
        this.$store.dispatch('layout/endSpinner')
    }
    //Call : this.$SpinnerState.deActiveSpinner()
```

