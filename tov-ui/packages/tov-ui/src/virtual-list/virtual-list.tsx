import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TVirtualList',
  setup() {
    const a = ref(11111)
    return {
      a,
    }
  },
  render() {
    return <div>{this.a}</div>
  },
})
