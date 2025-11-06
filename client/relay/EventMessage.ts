class EventMessage implements BaseWebEvent {
    type:string = "message"

    Run(relay: EventRelay): void {
    }

    JsonReader(jsonString: string): void {
    }

    static id:string;
    static sequence:number;
    static window:string;
    static events:BaseWebEvent[]
}
