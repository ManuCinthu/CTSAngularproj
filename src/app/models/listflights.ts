export class Listflights {
    constructor(
        public flightnames:string, 
        public departdate:Date, 
        public duration:Date, 
        public price:number,
        public departfrom:string,
        public goto:string,
        public passengers:number
    ){}
}
