/* eslint-disable react/prop-types */

import {
    isFactorMobile, 
    isFactorDesktop, 
    isFactorTv, 
    isFactorBrowser, 
    registerServiceWorker, 
    isWebBased, 
    isPlatformWeb
} from 'renative';

if (isFactorBrowser) registerServiceWorker();

export const hasMobileWebUI = isFactorMobile && isWebBased;
export const hasHorizontalMenu = !isFactorMobile && !isFactorDesktop && !hasMobileWebUI;
export const hasFullScreenMenu = hasMobileWebUI;
export const hasVerticalMenu = !hasHorizontalMenu && !hasFullScreenMenu;
export const hasWebFocusableUI = isWebBased && isFactorTv;

const staticThemes = {
    dark: {
        colorBgPrimary: '#000000',
        colorTextPrimary: '#FFFFFF',
        colorTextSecondary: '#AAAAAA',
        colorBorder: '#111111',
        statusBar: 'light-content',
    },
    light: {
        colorBgPrimary: '#FFFFFF',
        colorTextPrimary: '#000000',
        colorTextSecondary: '#333333',
        colorBorder: '#EEEEEE',
        statusBar: 'dark-content',
    }

};

export const ROUTES = {
    HOME: isPlatformWeb ? '/' : 'Home',
    BROWSE: isPlatformWeb ? '/browse' : "Browse",
    AUTH: isPlatformWeb ? '/auth' : "Auth",
    DETAILS: isPlatformWeb ? '/movies' : "Details",
    PROFILE: isPlatformWeb ? '/profile' : "Profile",
    PLAYER: isPlatformWeb ? '/player' : "Player",
};


export default staticThemes.dark;
