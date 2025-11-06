class EventRelay implements IRelay {
    public events:BaseWebEvent[] = [];
    public isRelayEnd = false;

    constructor(public readonly threadID: string) {}

    connectRun(event: BaseWebEvent) {
        this.events.push(event);
        console.log(`[Relay ${this.threadID}] connect event queued.`, event)
    }
}