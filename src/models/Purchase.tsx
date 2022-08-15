export interface Purchase {
    user: {
        id: string
    },
    cashSum: number,
    payment: {
        id: string
    }
}