<script  type="text/jsx">
export default {
  name: 'vuj-menu-item',
  props: {
    isActive: {
      type: Boolean,
      default: false      
    },
    group: {
      type: Boolean,
      default: false      
    }
  },
  render(h){
    let tmp;
    if(this.group){
      console.log(this.$slots.default)
      tmp = (
        <li class={{
            'is-curr': this.isActive,
            'vuj-menu-item': true
          }}>
            <span>{this.$slots.title}</span>
            {
              h('ul', [
                this.$slots.default
              ])
            }
        </li>
      );
    }else{
      tmp = (
        <li class={{
            'is-curr': this.isActive,
            'vuj-menu-item': true
          }}>
            {this.$slots.defalut}
        </li>
      );
    }
    
    return tmp;
  },
  data(){
    return {}
  }
}
</script>

