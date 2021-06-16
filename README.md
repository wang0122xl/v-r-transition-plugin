## 安装
### yarn add v-r-transition-plugin

## 使用
```javascript
<template>
    <router-view v-slot='{ Component, route }'>
        <transition :name="route.meta.transition" :duration="350">
            <component :is='Component' />
        </transition>
    </router-view>
</template>

<script>
    import routeAnimation from 'v-r-transition-plugin'
    const app = createApp(App)
    app.use(routeAnimation)
</script>
```

## transition与路由事件对应关系
| 事件 | transitionName |
| --- | --- |
| router.push | 'push' |
| router.go返回 | 'pop' |
| $.present | 'present' |
| $.dismiss | 'dismiss' |

## 注意
> $.dismiss()使用后路由将直接回退到调用$.present()的地址
> $.present()后，谨慎使用router.go(num < -1)

## 默认transition
```css
.push-enter-active,
.push-leave-active,
.pop-enter-active,
.pop-leave-active,
.present-enter-active,
.present-leave-active,
.dismiss-enter-active,
.dismiss-leave-active {
    transition: transform 0.35s, opacity 0.35s;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.push-enter-active {
    transform: translateX(100vw);
}

.push-enter-to {
    transform: translateX(0);
}

.push-leave-to {
    transform: translateX(-35vw);
}

.pop-enter-active {
    transform: translateX(-100vw);
}
.pop-enter-to {
    transform: translateX(0);
}
.pop-leave-to {
    transform: translateX(35vw);
}

.present-enter-active {
    transform: translateY(100vh);
}
.present-enter-to {
    transform: translateY(0);
}

.dismiss-enter-active {
    opacity: 0;
}
.dismiss-enter-to {
    opacity: 1;
}
.dismiss-leave-active {
    transform: translateY(0);
}
.dismiss-leave-to {
    transform: translateY(100vh);
}

```
