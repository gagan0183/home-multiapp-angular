class Course {
    title: String;
    category: String;
    provider: String;
    description: String;
    startDate: Date;
    completeDate: Date;
    link: String;
    status: String;
    print: boolean;

    constructor(title: String, category: String, provider: String, description: String, startDate: Date, completeDate: Date, link: String, status: String) {
        this.title = title;
        this.category = category;
        this.provider = provider;
        this.description = description;
        this.startDate = startDate;
        this.completeDate = completeDate;
        this.link = link;
        this.status = status;
    }
    
}

export default Course;