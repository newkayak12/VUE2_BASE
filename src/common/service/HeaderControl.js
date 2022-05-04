class HeaderControl{
    constructor(Store) {
        this.$store = Store
    }

    setTitle(title=''){
        this.$store.dispatch('layout/setTitle',{title})
    }
    setIsLogo(isLogo=false){
        this.$store.dispatch('layout/setIsLogo',{isLogo})
    }
    setIsBack(isBack=false){
        this.$store.dispatch('layout/setIsBack',{isBack})
    }
    setIsHome(isHome=false){
        this.$store.dispatch('layout/setIsHome',{isHome})
    }
    setHeader(title='', isLogo=false, isBack=false, isHome=false){
        this.$store.dispatch('layout/setHeader',{title,isLogo,isBack,isHome})
    }
    getHeader(){
        return this.$store.getters['layout/getHeader']
    }

}
export default HeaderControl