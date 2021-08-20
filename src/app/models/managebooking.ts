
export class Managebooking {
    constructor(
        public id:number,
        public flightnames:string, 
        public datetime:Date, 
        public price:number,
        public passengers:number,
        public flightnumber:number
    ){}
}