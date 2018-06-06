<script  type="text/jsx">
export default {
  name: "vuj-menu-item",
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    },
    itemIndex: {
      type: [String, Number]
    },
    openItem: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    let tmp;
    if (this.group) {
      let item = this.menuGroup[this.itemIndex];
      tmp = (
        <li
          onClick={this.flexible}
          data-index={this.itemIndex}
          class={{
            "is-curr": this.isActive,
            "vuj-menu-item": true
          }}
        >
          <span>{this.$slots.title}</span>
          {item.show ? h("ul", [this.$slots.default]) : ""}
        </li>
      );
    } else {
      tmp = h(
        "li",
        {
          class: {
            "is-curr": this.isActive,
            "vuj-menu-item": true
          }
        },
        [this.$slots.default]
      );
    }

    return tmp;
  },
  data() {
    return {
      menuGroup: {
        [this.itemIndex]: {
          show: this.itemIndex
        }
      }
    };
  },
  methods: {
    //展开
    flexible(e) {
      if (e.target === e.currentTarget) {
        //从绑定目标触发
        let menuGroup = this.menuGroup[this.itemIndex];
        menuGroup.show = !menuGroup.show;
      }
    }
  }
};
</script>

