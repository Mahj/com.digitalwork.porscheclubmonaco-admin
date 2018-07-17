export class Message {
    constructor(
    public createdDate?: number,
    public imgProfile?: string,
    public messageBody?: string,
    public messageTitle?: string,
    public toId?: number,
    public toName?: string
    ) {  }
}