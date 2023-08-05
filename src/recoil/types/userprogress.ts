export type Userprogresstype = {
    _id: string,
    upProgress: Number,
    upUser: { type: string, ref: string },
    upFileCourse: { type: string, ref: string },
}