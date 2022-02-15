import { inject, onUnmounted, Ref, ref, watch } from 'vue'
import { roomSymbol } from './symbols'
import { LiveList, LiveObject, Room } from '@liveblocks/client'
import { useStorage } from './useStorage'

export function useList (name: string, initial?: any[]): Ref<() => LiveList<any>|void>|null {
  const room = inject<Room>(roomSymbol)

  if (!room) {
    console.error('RoomProvider ı id prop ile ebeveyn olarak kullanın')
    return null
  }

  const root = useStorage()
  const list = ref(() => {})

  watch(root, () => {
    if (!root.value().get(name)) {
      root.value().set(name, new LiveList(initial))
    }

    list.value = () => root.value().get(name)

    const unsubscribe = room.subscribe(root.value().get(name), (newList) => {
      list.value = () => newList
    })

    onUnmounted(() => {
      unsubscribe()
    })
  })

  return list
}
