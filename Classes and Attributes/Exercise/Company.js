class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        const invalidInputs = ['', undefined, null];

        if (invalidInputs.includes(name) || invalidInputs.includes(salary) ||
            invalidInputs.includes(position) || invalidInputs.includes(department)) {
            throw new Error("Invalid input!");
        }
        if (salary < 0) {
            throw new Error("Invalid input!");
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({
            name: name,
            salary: salary,
            position: position
        });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const departmentsArr = Object.entries(this.departments).sort((a, b) => getAvgSalary(b[1]) - getAvgSalary(a[1]));
        const depWithBiggestAvgSalary = departmentsArr[0][0];
        const sortedEmployees = Object.values(this.departments[depWithBiggestAvgSalary]).sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        const sortedEmployeesAsStr = [];
        sortedEmployees.forEach(employee => sortedEmployeesAsStr.push(`${employee.name} ${employee.salary} ${employee.position}`));

        return `Best Department is: ${depWithBiggestAvgSalary}\nAverage salary: ${getAvgSalary(this.departments[depWithBiggestAvgSalary])}\n${sortedEmployeesAsStr.join('\n')}`;

        function getAvgSalary(arr) {
            let sum = 0;
            arr.forEach(obj => sum += obj.salary);
            return (sum / arr.length).toFixed(2);
        }
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
