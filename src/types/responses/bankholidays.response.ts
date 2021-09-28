export interface IGetBankHolidaysResponse {
    "england-and-wales": DivisionEvents;
    scotland: DivisionEvents;
    "northern-ireland": DivisionEvents;
    "united-kingdom": DivisionEvents;
}

interface DivisionEvents {
    division: string;
    events: Event[];
}

interface Event {
    title: string;
    date: Date;
    notes: Notes;
    bunting: boolean;
}

enum Notes {
    Empty = "",
    SubstituteDay = "Substitute day",
}
