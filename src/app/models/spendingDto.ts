export class SpendingDto {
    id: number;
    description: string;
    date: Date;
    userId: number;
    value: number;
    category: string;
    tags: string[];
}

/*
    public int Id { get; set; }
    public string Description { get; set; }
    public DateTime Date { get; set; }
    public decimal Value { get; set; }
    public string Category { get; set; }
    public List<string> Tags { get; set; }
 */