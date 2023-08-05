import {atom, selector} from "recoil";
import { Usertype, } from "../types";

export const userState = atom<Usertype[]>({
    key: 'user',
    default: []
});

export const _userState = atom({
    key: '_user',
    default: {}
})

export const selectedUser = selector< Usertype | any>({
    key: 'detail-user-selected',
    get: ({ get }) => ({id}: {id: string}) => {
        const objectArray = get(userState);
        return objectArray.find(obj => obj._id === id) || null;
      },
    }
)