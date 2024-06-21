import { mount } from '@vue/test-utils'
import { Button } from 'th-ui'

describe('button', () => {
  it('should work', () => {
    const type = "primary"
    const wrapper = mount(<Button type="primary">测试</Button>)
    const btnEl = wrapper.find('button')
    const hasPrimary = btnEl.element.classList.contains('th-button--primary')
    console.log(btnEl.element.classList);
    expect(hasPrimary).toBe(true)
    wrapper.unmount()
  })

  it('size', () => {
    const wrapper = mount(<Button size="small">测试</Button>)
    const btnEl = wrapper.find('button')
    const hasSize = btnEl.element.classList.contains('th-button-size--small')
    expect(hasSize).toBe(true)
    wrapper.unmount()
  })

  it('click', () => {
    let clickState = false
    const handleClick = () => {
      clickState = true
    }
    const wrapper = mount(<Button onClick={handleClick}>测试</Button>)
    wrapper.trigger('click')
    expect(clickState).toBe(true)
    wrapper.unmount()
  })
})