
abstract class BaseWebEvent {
    abstract JsonReader(jsonString:string): void;
    abstract type:string;
    abstract Run(relay:EventRelay):void;
}