import { Courstype } from "./cours"

export type Filecourstype = {
    _id: string,
    fcCourse: { type: string, ref: string },
    fcLabel: string,
    fcFilename: string,
    fcLink: string,
    fcType: string,
    fcDuration: number
} 