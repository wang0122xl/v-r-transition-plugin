import { RouteLocationRaw } from "vue-router";
import * as Vue from 'vue';
import '../style/index.css';
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $present: (to: RouteLocationRaw) => void;
        $dismiss: () => void;
    }
}
interface RouteAnimationProps {
    position?: number;
    present?: number;
    routeMetaTransitionName?: string;
}
declare const _default: {
    install: (app: Vue.App<Element>, options?: RouteAnimationProps) => void;
};
export default _default;
