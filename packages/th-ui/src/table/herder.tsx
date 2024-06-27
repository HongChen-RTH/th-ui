import { defineComponent } from "vue";
import type { HeaderProps } from "./interface";
import { useClassnames } from "@th-ui/utils";

export const Header = defineComponent<HeaderProps>({
  name: 'Header',
  setup(props = { columns: [] }) {

    const { c } = useClassnames('table')

    const cls = {
      [c('header')]: true,
    }
    const rowCls = {
      [c('header-row')]: true
    }

    const cellCls = {
      [c('cell')]: true,
      [c('header-cell')]: true,
    }


    const renderColumn = () => {
      return props.columns?.map(column => {
        return <th class={cellCls}>{column.title}</th>
      })
    }
    return () => {
      return (
        <thead class={cls}>
          <tr class={rowCls}>
            {renderColumn()}
          </tr>
        </thead>
      )
    }
  }
})