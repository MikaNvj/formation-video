import {atom, selector} from "recoil";
import { Appartementtype, } from "../types";

export const AppartementState = atom<Appartementtype[]>({
    key: 'appartement',
    default: []
});

export const _AppartementState = atom({
    key: '_appartement',
    default: {}
})

export const selectedappartement = selector< Appartementtype | any>({
    key: 'detail-appartement-selected',
    get: ({ get }) => ({id}: {id: string}) => {
        const objectArray = get(AppartementState);
        return objectArray.find(obj => obj.num === id) || null;
      },
    }
)