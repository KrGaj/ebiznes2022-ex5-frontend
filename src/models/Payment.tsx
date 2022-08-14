export interface Payment {
    method: string;
    date: number;
    paid: boolean;
    user: {
        id: String
    };
}