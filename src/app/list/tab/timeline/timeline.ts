export class Timeline {
    constructor(
    //public email?: string,
    //public name?: number

        public date?: string,
        public lists?: TimelineList[]
    ) {  }
}

export class TimelineList {
    constructor(
        public createdTime: string,
        public description: string,
        public images: string,
        public profileImage: string,
        public profileName: string
    ) {}
}
