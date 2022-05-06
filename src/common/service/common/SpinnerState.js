import Constants from '@/common/constants/ConstantCode'
class SpinnerState{
    constructor(store,) {
        this.$store = store
    }
    activeSpinner(first=true){
        if(first){
            return this.$store.dispatch('layout/startSpinner', {spinnerColor: Constants.MAIN_THEME_COLOR.FIRST})
        }
        return this.$store.dispatch('layout/startSpinner', {spinnerColor: Constants.MAIN_THEME_COLOR.SECOND})
    }
    deActiveSpinner(){
        this.$store.dispatch('layout/endSpinner')
    }
}
export  default  SpinnerState