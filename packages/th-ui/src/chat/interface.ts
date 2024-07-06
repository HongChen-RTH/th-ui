export interface ChatProps {
  data: ChatItem[]
  avatarProps: any
}

export interface ChatItem {
  type: string
  name: string
  user: string
  time: string
  avatar: string
  content: any
}

