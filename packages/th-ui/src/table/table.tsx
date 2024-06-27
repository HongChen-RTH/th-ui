import { defineComponent, isVNode } from "vue";
import { TableProps } from "./interface";

import { Header } from "./herder";
import { Body } from "./body";
import { TableColumn } from "./table-column";

import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassnames } from "@th-ui/utils";


export default defineComponent((props: TableProps, { slots }) => {
  return () => {

    const { c } = useClassnames('table')
    const cls = {
      [c()]: true,
    }

    const children = filterEmpty(slots.default?.() || [])

    const { columns, data } = props

    // 如果有传columns就使用，否则采用t-table-column插槽
    const myColumns: any[] = columns ?? []

    if (myColumns.length < 1) {
      children.forEach(child => {
        if (isBaseType(child) || !isVNode(child)) return

        if ((child as any).type === 't-table-column') { //不一样
          myColumns.push(child.props)
        }
      })
    }



    return (
      <table class={cls}>
        <Header columns={myColumns} v-slots={slots} />
        <Body columns={myColumns} data={data}></Body>
      </table>
    )
  }
}, {
  name: 'ThTable'
}
);