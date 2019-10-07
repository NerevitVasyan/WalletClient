import { SpendingDto } from '../models/spendingDto';

export const SPENDINGS_MOCK: SpendingDto[] = [
    {
        id: 0,
        category: "Food",
        date: new Date("09-29-2019"),
        description: "Buy Coffee",
        tags: ["Coffee","Drinks"],
        value: 10
    },
    {
        id: 1,
        category: "Food",
        date: new Date("09-29-2019"),
        description: "Buy Coffee",
        tags: ["Coffee","Drinks"],
        value: 10
    }, {
        id: 2,
        category: "Food",
        date: new Date("09-29-2019"),
        description: "Buy Coffee",
        tags: ["Coffee","Drinks"],
        value: 10
    }
]