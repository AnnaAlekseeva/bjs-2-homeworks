function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
   // this.marks.push(mark);
    } else {
    this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){ 
    this.marks = [];
    } 
    for (let mark of marks) this.marks.push(mark);
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
  delete(this.subject);
  delete(this.marks);
}