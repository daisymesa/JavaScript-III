/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW/GLOBAL OBJECT BINDING:
    When using "this" in the global scope, the value of "this" will be the window or the console.

* 2. IMPLICIT BINDING:
    When using "this" in an implicit binding, the value of "this" will be based on whatever is to the left of the dot when called.

* 3. NEW BINDING:
    When using "this" in a new binding, the value of "this" is being used as part of a constructor function to create a new object.

* 4. EXPLICIT BINDING:
    When using an explicit binding (for example .call and .apply), we are able to override the values that we'd set for objects using constructor functions.  We are able to use arrays to override these previous values using the .apply method, and or individual elements using the .call method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function school(schoolName) {
	console.log(`I am a student at ${this}!`);
	return `I am a student at ${this}!`;
}
school("Lambda School");

// Principle 2

// code example for Implicit Binding
const student = {
    "school": "Lambda School",
    "program": function(trackName) {
        console.log(`I am a ${this.school} student, studying ${trackName}!`);
        console.log(this);
    }
};
student.program("Full Stack Web Development");

// Principle 3

// code example for New Binding
function NewStudent(studentName) {
    this.school = "Lambda";
    this.name = studentName;
    this.cohort = "Web19";
    this.studentInfo = function() {
        console.log(this);
    };
}
const jane = new NewStudent("Jane");
const tarzan = new NewStudent("Tarzan");

jane.studentInfo();
tarzan.studentInfo();

// Principle 4

// code example for Explicit Binding

const program = function(sprint1, sprint2) {
    console.log(`${this.name} is a ${this.school} student, and she's successfully passed ${sprint1} and ${sprint2}.`);
};
const studentWeb19 = {
    "name": "Daisy",
    "school": "Lambda School"
};
const sprintsCompleted = ["Intro to UI and Git", "Advanced CSS"];

program.call(studentWeb19, sprintsCompleted[0], sprintsCompleted[1]);
program.apply(studentWeb19, sprintsCompleted);