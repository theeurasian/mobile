export class WSCmd {
  name: string;
  guid: string;
  body: any;

  constructor(data: any, body: any = null){
    try {
      const parse: WSCmd = JSON.parse(data);
      this.name = parse.name;
      this.guid = parse.guid;
      this.body = parse.body;
    }
    catch {
      this.name = data != null ? data.toString() : 'noValue';
      this.body = body != null ? body : 'noValue';
    }
  }
  toJson(): string{
    return JSON.stringify(this);
  }
}
