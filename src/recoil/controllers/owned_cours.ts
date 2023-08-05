import {atom, selector} from "recoil";
import { Ownedcourstype, } from "../types";

export const ownedcoursState = atom<Ownedcourstype[]>({
    key: 'owned',
    default: []
});

export const _ownedcoursState = atom({
    key: '_owned',
    default: {}
})

export const selectedowned = selector< Ownedcourstype | any>({
    key: 'detail-owned-selected',
    get: ({ get }) => ({id}: {id: string}) => {
        const objectArray = get(ownedcoursState);
        return objectArray.find(obj => obj._id === id) || null;
      },
    }
)