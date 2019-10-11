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

  constructor(
    title: String,
    category: String,
    provider: String,
    description: String,
    startDate: Date,
    completeDate: Date,
    link: String,
    status: String,
    print: boolean
  ) {
    this.title = title;
    this.category = category;
    this.provider = provider;
    this.description = description;
    this.startDate = startDate;
    this.completeDate = completeDate;
    this.link = link;
    this.status = status;
    this.print = print;
  }
}

export default Course;
