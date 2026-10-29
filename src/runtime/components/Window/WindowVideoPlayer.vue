<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const props = defineProps<{
  window: any
}>()

const { t } = useI18n()

function extractFilename(path?: string): string {
  if (!path) return ''
  try {
    const url = new URL(path)
    return url.pathname.split('/').filter(Boolean).pop() || path
  } catch {
    return path.split('/').filter(Boolean).pop() || path
  }
}

const videoPath = (props.window?.meta?.path || props.window?.meta?.url) as string | undefined
const title = ref((props.window?.meta?.title as string | undefined) || extractFilename(videoPath))

if (props.window?.setTitleOverride) {
  props.window.setTitleOverride(title)
} else if (props.window?.actions?.setTitleOverride) {
  props.window.actions.setTitleOverride(title.value)
}

function loadVideoUrl(pathString?: string): string | undefined {
  if (!pathString) return undefined

  if (props.window?.meta?.blob instanceof Blob) {
    return URL.createObjectURL(props.window.meta.blob)
  }

  return pathString
}

const filePath = loadVideoUrl(videoPath)
</script>

<template>
  <DesktopWindow v-bind="$props">
    <video
      :src="filePath"
      :controls="!props.window.meta.noControls"
      :autoplay="props.window.meta.autoplay"
      :loop="props.window.meta.loop"
    />
  </DesktopWindow>
</template>

<style scoped lang="scss">
video {
  width: 100%;
  max-width: 60vw;
  max-height: 60vh;
}
</style>
