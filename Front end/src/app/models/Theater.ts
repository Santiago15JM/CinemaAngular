export class Theater {
    _id?: string
    name: string
    location: string
    functions: [Function]

    constructor(
        name: string,
        location: string,
        funtions: [Function]
    ) {
        this.name = name
        this.location = location
        this.functions = funtions
    }
}