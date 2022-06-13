export interface Payment {
    id: string;
    method: string;
    date: number;
    paid: boolean;
    user: number;
}