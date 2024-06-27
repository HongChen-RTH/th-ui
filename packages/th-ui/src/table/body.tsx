import { defineComponent } from "vue";
import type { BodyProps } from "./interface";
import { useClassnames } from "@th-ui/utils";

export const Body = defineComponent<BodyProps>({
  name: 'Body',
  setup(props = { columns: [], data: [] }) {
    const { c } = useClassnames('table')
    const cls = {
      [c('body')]: true,
    }

    const cellCls = {
      [c('cell')]: true,
      [c('body-cell')]: true,
    }

    const rowCls = {
      [c('body-row')]: true,
    }

    const { columns, data } = props

    const renderCell = (item: any) => {
      return columns?.map(v => {
        return <td class={cellCls}>{item[v.key]}</td>
      })
    }

    const renderData = () => {
      return data?.map(column => {
        return <tr class={rowCls}>
          {renderCell(column)}
        </tr>
      })
    }
    return () => {
      return (
        <tbody class={cls}>
          {renderData()}
        </tbody>
      )
    }
  }
})