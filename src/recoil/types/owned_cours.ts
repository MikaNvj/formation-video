export type Ownedcourstype = {
    _id: string,
    ocDebut: string,
    ocActive: boolean,
    ocCourse: { type: string, ref: string },
    ocUser: { type: string, ref: string },
    ocLastPlayed: string
}