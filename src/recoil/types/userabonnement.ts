export type Userabonnementtype = {
    _id: string,
    uaActive: boolean,
    uaDebut: string,
    uaUser: { type: string, ref: string },
    uaAbonnement: { type: string, ref: string },
    uaDayLeft: number
}