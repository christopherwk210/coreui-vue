import { mergeData } from 'vue-functional-data-merge'
export default {
  functional: true,
  name: 'CButtonGroup',
  props: {
    vertical: Boolean,
    size: String,
  },
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        class: [
          !props.vertical ? 'btn-group' : 'btn-group-vertical',
          { [`btn-group-${props.size}`] : Boolean(props.size) }
        ],
        attrs: {
          role: 'group'
        }
      }),
      children
    )
  }
}