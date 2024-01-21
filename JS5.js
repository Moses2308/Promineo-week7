class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class Instructor extends Person {
  constructor(firstName, lastName, age, subject) {
    super(firstName, lastName, age);
    this.subject = subject;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
}

class School {
  constructor(name) {
    this.name = name;
    this.classrooms = [];
  }

  getClassrooms() {
    let listOfClassrooms = "";
    for (let i = 0; i < this.classrooms.length; i++) {
      listOfClassrooms +=
        i +
        ") " +
        `${this.classrooms[i].roomNumber} : ${this.classrooms[i].instructor.lastName} : ${this.classrooms[i].students.length} \n`;
    }
    return listOfClassrooms;
  }
}

class Classroom {
  constructor(roomNumber, instructor) {
    this.roomNumber = roomNumber;
    this.instructor = instructor;
    this.students = [];
  }
  getStudents() {
    let listOfStudents = "";
    for (let i = 0; i < this.students.length; i++) {
      listOfStudents +=
        i +
        ") " +
        `${this.students[i].firstName} ${this.students[i].lastName}\n`;
    }
    return listOfStudents;
  }
}

class Menu {
  constructor() {
    this.selectedSchool = null;
    this.selectedClassroom = null;
    this.schools = [];
  }

  start() {
    let userOption = this.getSchoolOption();
    while (userOption != "0") {
      switch (userOption) {
        case "1":
          this.createSchool();
          break;
        case "2":
          this.viewSchools();
          break;
        case "3":
          this.editSchool();
          break;
        case "4":
          this.deleteSchool();
          break;
        default:
          userOption = 0;
      }
      userOption = this.getSchoolOption();
    }
    alert("Exiting Application");
  }

  //CREATE / ADD METHODS
  createSchool() {
    const schoolName = prompt("Please enter a name for your new school");
    this.schools.push(new School(schoolName));
  }
  createClassroom(school) {
    const roomNumber = prompt("please enter a room number for the classroom");
    const instructorFName = prompt("Please enter the instructor's first name");
    const instructorLName = prompt("Please enter the instructor's last name");
    const instructorAge = prompt("Please enter the instructor's age");
    const subject = prompt(
      "Please enter the subject to be taught in this class"
    );

    school.classrooms.push(
      new Classroom(
        roomNumber,
        new Instructor(instructorFName, instructorLName, instructorAge, subject)
      )
    );
  }
  addStudent(classroom) {
    const studFname = prompt("Please enter the first name of the student");
    const studLName = prompt("Please enter the last name of the student");
    const studAge = prompt("Please enter the age of the student");

    classroom.students.push(new Student(studFname, studLName, studAge, "A"));
  }

  //VIEW METHODS
  viewSchools() {
    alert(this.getSchools());
  }
  viewClassrooms(school) {
    alert(school.getClassrooms());
  }
  viewStudents(classroom) {
    alert(classroom.getStudents());
  }

  //EDIT OBJECT METHODS
  editSchool() {
    let schoolIndex = prompt(
      `Please pick a school you'd like to edit\n${this.getSchools()}`
    );
    this.selectedSchool = this.schools[schoolIndex];

    let userOption = this.getClassroomOption(this.selectedSchool);
    while (userOption != 0) {
      switch (userOption) {
        case "1":
          this.createClassroom(this.selectedSchool);
          break;
        case "2":
          this.viewClassrooms(this.selectedSchool);
          break;
        case "3":
          this.editClassroom(this.selectedSchool);
          break;
        case "4":
          this.editSchoolName(this.selectedSchool);
          break;
        case "5":
          this.deleteClassroom(this.selectedSchool);
          break;
        default:
          userOption = 0;
      }
      userOption = this.getClassroomOption(this.selectedSchool);
    }
    alert("exiting to main menu");
  }

  editClassroom(school) {
    let ClassIndex = prompt(
      `Please select a class you'd like to edit\n${school.getClassrooms()}`
    );
    this.selectedClassroom = school.classrooms[ClassIndex];
    let userOption = this.getPersonOption();
    while (userOption != 0) {
      switch (userOption) {
        case "1":
          this.addStudent(this.selectedClassroom);
          break;
        case "2":
          this.viewStudents(this.selectedClassroom);
          break;
        case "3":
          this.deleteStudent(this.selectedClassroom);
          break;
        default:
          userOption = 0;
      }
      userOption = this.getPersonOption();
    }
  }

  editSchoolName(school) {
    school.name = prompt(`Please enter the new name for ${school.name}`);
  }

  // DELETE METHODS
  deleteSchool() {
    if (this.schools.length === 0) {
      alert("There are no Schools!");
      return;
    }
    let userOption = prompt(`Select a school to delete \n${this.getSchools()}`);
    this.schools.splice(Number.parseInt(userOption), 1);
  }

  deleteClassroom(school) {
    if (school.classrooms.length === 0) {
      alert("There are no classrooms!");
      return;
    }

    let userIndex = prompt(
      `Please enter the index of the classroom you'd like to remove \n${school.getClassrooms()}`
    );
    school.classrooms.splice(userIndex, 1);
  }
  deleteStudent(classroom) {
    if (classroom.students.length === 0) {
      alert("there are no students!");
      return;
    }
    let userIndex = prompt(
      `Plesae enter the index of the student you'd like to remove\n${classroom.getStudents()}`
    );
    classroom.students.splice(userIndex, 1);
  }

  // USER OPTION METHODS
  getSchoolOption() {
    return prompt(`
        Welcome to the School Manger Application!
        Please select an option you'd like to take :

        0) Exit Application
        1) Create School
        2) View Schools
        3) Edit School
        4) Delete School
       `);
  }
  getClassroomOption(school) {
    return prompt(`
        Please choose an action for ${school.name} :
        0) Cancel
        1) Create Classroom
        2) View Classrooms
        3) Edit Classroom
        4) Edit School Name
        5) Delete Classroom
        `);
  }
  getPersonOption() {
    return prompt(`
        0) Cancel
        1) Add New Student
        2) View Students1
        3) Delete Student
        `);
  }

  //GET OBJECT METHODS
  getSchools() {
    let listOfSchools = "";
    for (let i = 0; i < this.schools.length; i++) {
      listOfSchools += i + ") " + this.schools[i].name + "\n";
    }
    return listOfSchools;
  }
}

/* 
        provide a menu for school options
            Create school ~
            View Schools ~ 
            Edit School ~
            Delete School ~
        
        provide a menu for classroom options
            Create classroom ~
            View Classrooms ~
            Edit Classroom ~ 
            Edit School Name ~
            Delete Classroom ~

        provide a menu for student or teacher options
            Add Student~
            View Students~
            Delete Student~

    */
const menu = new Menu();
menu.start();
