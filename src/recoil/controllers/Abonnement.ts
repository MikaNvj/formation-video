import {atom, selector} from "recoil";
import { Abonnementtypes } from "../types";

export const AbonnementState = atom<Abonnementtypes[]>({
    key: 'Abonnement',
    default: []
});

export const _AbonnementState = atom({
    key: '_Abonnement',
    default: {}
})

export const selectedAbonnement = selector< Abonnementtypes | any>({
    key: 'detail-Abonnement-selected',
    get: ({ get }) => ({id}: {id: string}) => {
        const objectArray = get(AbonnementState);
        return objectArray.find(obj => obj._id === id) || null;
      },
    }
)