
//Error class - the template for the object
export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name ="NetworkError";
    }
}
//keep getting type errors so commenting out until i can get it working