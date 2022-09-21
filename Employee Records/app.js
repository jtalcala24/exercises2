const employees = [];

function Employee(name, jobTitle, salary, status) {
  (this.name = name),
    (this.jobTitle = jobTitle),
    (this.salary = salary),
    (this.status = "Full-Time");
  this.summary = function printEmployeeForm() {
    console.log(this.name, this.jobTitle, this.salary, this.status);
  };
}

const logan = new Employee("Logan", "Lead COT", 90000);
const stephen = new Employee("Stephen", "COT", 850000);
const danny = new Employee("Danny", "ACOM", 110000);

employees.push(logan);
employees.push(stephen);
employees.push(danny);

employees[0].status = "part-time";
console.log(employees);

logan.summary();
danny.summary();
