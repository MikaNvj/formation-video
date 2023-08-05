import { atom } from "recoil";

export const Sign = atom({
    key: 'sign',
    default: false,
})

export const navigationatom = atom({
    key: 'nav',
    default: 1,
})
export const users = atom({
    key: 'users',
    default: false,
})
export const indexvideo = atom({
    key:'videoindex',
    default: 1
})
export const videotoplay = atom({
    key:'videotoplay',
    default: require('../assets/Download.mp4')
})