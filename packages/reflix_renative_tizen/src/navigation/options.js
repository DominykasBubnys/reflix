const TransitionScreen = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0]
                        })
                    },
                    {
                        translateX: next
                            ? next.progress.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [0, -layouts.screen.width]
                              })
                            : 1
                    }
                ]
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5]
                })
            }
        };
    }
};

export const CardOptions = {
    cardStyle: { backgroundColor: 'transparent' },
    ...TransitionScreen
};