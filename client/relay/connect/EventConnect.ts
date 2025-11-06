interface EventConnectProperties {
    user?: string;
    os?: string;
    browser?: string;
    timezone?: string;
    language?: string;
    theme?: string;
    device?: "mobile" | "desktop" | "tablet"
    width?: number;
    height?: number;
    url?: string;
    reconnectID?: string;
}

class EventConnect implements BaseWebEvent {
    type:string = "connect";

    constructor(public props:EventConnectProperties) {}

    static Connect(props:EventConnectProperties):EventConnect {
        const connection:EventConnectProperties = {
            os: navigator.platform,
            browser: navigator.userAgent,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
            theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            device: window.innerWidth <= 768 ? "mobile" : "desktop",
            width: window.innerWidth,
            height: window.innerHeight,
            url: window.location.href,
            ...props
        }
        return new EventConnect(connection)
    }
    

    Run(relay: EventRelay): void {
    }

    JsonReader(jsonString: string): void {
    }

}