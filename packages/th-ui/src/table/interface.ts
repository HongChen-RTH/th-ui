export interface ColumnsType {
  title: string
  key: string
}

export interface HeaderProps {
  columns?: ColumnsType[]
}

export interface TableProps {
  columns?: ColumnsType[]
  data?: any[]
}

export interface BodyProps {
  columns?: ColumnsType[]
  data?: any[]
}