interface IRelay {
    readonly threadID:string;
    events:BaseWebEvent[];
    isRelayEnd:boolean;
    connectRun(event: BaseWebEvent):void;
}