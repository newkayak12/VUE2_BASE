//popupList
import Vue from 'vue'
import Test from '@/components/modal/popupContainer/Test'
const ModalList = () => {
    return {
        TEST:Test.name
    }
}

Vue.component(Test.name,Test)
export default ModalList()