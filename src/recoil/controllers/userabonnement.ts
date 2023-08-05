import {atom, selector} from "recoil";
import { Userabonnementtype, } from "../types";

export const userabonnementState = atom<Userabonnementtype[]>({
    key: 'userabonnement',
    default: []
});

export const _userabonnementState = atom({
    key: '_userabonnement',
    default: {}
})

export const selectedUserabonnement = selector< Userabonnementtype | any>({
    key: 'detail-userabonnement-selected',
    get: ({ get }) => ({id}: {id: string}) => {
        const objectArray = get(userabonnementState);
        return objectArray.find(obj => obj._id === id) || null;
      },
    }
)