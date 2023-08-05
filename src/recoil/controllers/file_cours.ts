import {atom, selector} from "recoil";
import { Filecourstype, } from "../types";

export const filecoursState = atom<Filecourstype[]>({
    key: 'filecours',
    default: []
});

export const _filecoursState = atom({
    key: '_filecours',
    default: {}
})

export const selectedfilecours = selector< Filecourstype | any>({
    key: 'detail-filecours-selected',
    get: ({ get }) => ({id}: {id: string}) => {
        const objectArray = get(filecoursState);
        return objectArray.find(obj => obj._id === id) || null;
      },
    }
)