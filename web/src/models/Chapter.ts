export class Chapter {
    _id?: string
    Title: string
    Description: string

    constructor(_id = undefined, Title = '', Description = '') {
        this._id = _id
        this.Title = Title
        this.Description = Description
    }
}