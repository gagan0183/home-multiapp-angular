class Course {
    title: String;
    provider: String;
    category: String;
    description: String;
    startDate: Date;
    completeDate: Date;
    link: String;
    status: String;
    print: boolean;

    constructor(title: String, provider: String, category: String, description: String, startDate: Date, completeDate: Date, link: String, status: String, print: boolean) {
        this.title = title;
        this.provider = provider;
        this.category = category;
        this.description = description;
        this.startDate = startDate;
        this.completeDate = completeDate;
        this.link = link;
        this.status = status;
        this.print = print;
    }
    
}

export default Course;