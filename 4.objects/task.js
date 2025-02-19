function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
     for (let mark of marks) {
      this.marks.push(mark);
    }  
}

Student.prototype.getAverage = function () {
  let sum =  0;
  if (this.marks.length === 0) {
    return 0;
  } else{
  for (let mark of this.marks) sum +=mark;
  return sum/this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}