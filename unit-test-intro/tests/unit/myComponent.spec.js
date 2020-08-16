import { shallowMount, mount } from '@vue/test-utils'
import myComponent from '@/components/myComponent.vue'

describe('myComponent.vue', () => {
  it('renders props start value when passed', () => {
    const startValue = '5'
    const wrapper = shallowMount(myComponent, {
      propsData: { startValue }
    })
    expect(wrapper.text()).toMatch(startValue)
  })
})


describe('myComponent.vue', () => {
  it('after render', () => {
    const startValue = '5'
    const wrapper = mount(myComponent, {
      propsData: { startValue }
    })
    expect(wrapper.vm.number).toMatch(startValue)
  })
})


describe('myComponent.vue', () => {
  it('increase click test', () => {
    const startValue = 8;
    const resultValue = 9;
    const wrapper = mount(myComponent, {
      propsData: { startValue }
    })
    wrapper.vm.increase(); //step by step
    expect(wrapper.vm.number).toEqual(resultValue)
  })
})
