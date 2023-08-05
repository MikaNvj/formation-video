import {atom, selector} from "recoil";
import { Courstype, } from "../types";

export const Coursstate = atom<Courstype[]>({
    key: 'appartement',
    default: []
});

export const _Coursstate = atom({
    key: '_appartement',
    default: {}
})

export const selectedappartement = selector< Courstype | any>({
    key: 'detail-appartement-selected',
    get: ({ get }) => ({id}: {id: string}) => {
        const objectArray = get(Coursstate);
        return objectArray.find(obj => obj._id === id) || null;
      },
    }
)