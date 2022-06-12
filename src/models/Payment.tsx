export interface Payment {
    id: string;
    method: string;
    date: BigInt;
    paid: boolean;
    user: number;
}