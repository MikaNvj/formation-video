import {atom, selector} from "recoil";
import { Userprogresstype, } from "../types";

export const userprogresState = atom<Userprogresstype[]>({
    key: 'userprogress',
    default: []
});

export const _userprogresState = atom({
    key: '_userprogress',
    default: {}
})

export const selectedUserprogress = selector< Userprogresstype | any>({
    key: 'detail-userprogress-selected',
    get: ({ get }) => ({id}: {id: string}) => {
        const objectArray = get(userprogresState);
        return objectArray.find(obj => obj._id === id) || null;
      },
    }
)