import { RouteLocationRaw } from 'vue-router'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $present: (to: RouteLocationRaw) => void
        $dismiss: () => void
    }
}