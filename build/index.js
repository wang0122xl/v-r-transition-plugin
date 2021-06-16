import '../style/index.css';
export default {
    install: (app, options = {
        routeMetaTransitionName: 'transition'
    }) => {
        app.config.globalProperties.$present = (to) => {
            if (options.present == undefined) {
                options.present = 0;
            }
            app.config.globalProperties.$router.push(to);
        };
        app.config.globalProperties.$dismiss = () => {
            if (options.present) {
                const tempPresent = options.present;
                options.present = 1;
                app.config.globalProperties.$router.go(-tempPresent);
            }
            else {
                app.config.globalProperties.$router.back();
            }
        };
        const transformMetaTransition = (to, from, transition) => {
            to.meta[options.routeMetaTransitionName] = transition;
            from.meta[options.routeMetaTransitionName] = transition;
        };
        app.config.globalProperties.$router.afterEach((to, from) => {
            if (options.position == undefined) {
                options.position = 0;
            }
            else {
                if (history.state.position > options.position) {
                    if (options.present == 0) {
                        transformMetaTransition(to, from, 'present');
                    }
                    else {
                        transformMetaTransition(to, from, 'push');
                    }
                    options.present != undefined && options.present++;
                }
                else if (history.state.position < options.position) {
                    if (options.present == 1) {
                        transformMetaTransition(to, from, 'dismiss');
                    }
                    else {
                        transformMetaTransition(to, from, 'pop');
                    }
                    options.present && options.present--;
                    if (options.present == 0) {
                        options.present = undefined;
                    }
                }
                options.position = history.state.position;
            }
            return true;
        });
    }
};
