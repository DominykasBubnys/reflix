import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Router, navigate } from '@reach/router';

// import ScreenHome from '../components/screenHome';
// import ScreenMyPage from '../components/screenMyPage';
// import ScreenModal from '../components/screenModal';
// import Menu from '../components/menu';
import { themeStyles } from '../config';

const App = () => {
    useEffect(() => {
        // Required for tizen
        if (window.focus) window.focus();
    }, []);

    return (
        // <View style={themeStyles.app}>
        <View style={{backgroundColor: "red"}}>
            {/* <Menu focusKey="menu" navigate={navigate} />
            <View style={themeStyles.appContainer}>
                <Router>
                    <ScreenHome path="/" />
                    <ScreenMyPage path="my-page" />
                    <ScreenModal path="modal" />
                </Router>
            </View> */}
            <Text>
                Hello from webaas
            </Text>
        </View>
    );
};

export default App;
