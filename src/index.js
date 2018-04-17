import Container from 'packages/container/container'
import Header from 'packages/header/header'
import Footer from 'packages/footer/footer'
import aside from 'packages/aside/aside'

const components = {
  Container,
  Header,
  Footer,
  aside
}

const install = (Vue) => {
  if (install.installed) return;
  Object.keys(components).map(name => Vue.component(components[name].name, components[name]))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Container,
  Header,
  Footer,
  aside
}

export default {
  install,
  ...components
};
