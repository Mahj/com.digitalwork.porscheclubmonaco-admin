export class Feed {
    constructor(
    public comment    ?: number,
    public description?: string,
    public image      ?: number,
    public images     ?: Array<Img>,
    public imgProfile ?: string, 
    public like       ?: number, 
    public location   ?: string, 
    public name       ?: string,
    public postDate   ?: string,
    public startTime  ?: string, 
    public title      ?: string
    ) {  }
}

export class Img {
    constructor(
        public url?: string
    ) { }
}
