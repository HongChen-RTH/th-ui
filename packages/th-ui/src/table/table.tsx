import { defineComponent } from "vue";


export default defineComponent((props, { slots }) => {
  return () => {
    return (
      <div>
        <div>table</div>
      </div>
    )
  }
}, {
  name: 'ThTable'
}
);