import Hello from 'packages/hello/hello'

const install = (Vue) => {
  if (install.installed) return;
  Vue.component(Hello.name, Hello)
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Hello
}
export default {
  install,
  Hello
}
