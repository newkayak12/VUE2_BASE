class SpinnerState{
    constructor(store) {
        this.$store = store
    }

    activeSpinner(color=''){
        this.$store.dispatch('layout/startSpinner', {spinnerColor: color})
    }
    deActiveSpinner(){
        this.$store.dispatch('layout/endSpinner')
    }
}
export  default  SpinnerState