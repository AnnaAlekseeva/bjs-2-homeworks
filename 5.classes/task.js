class PrintEditionItem {
    constructor(name,releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this.state = this._state*1.5; 
    }
    set state(value) {
        if (value > 100) {
            this._state = 100;
        } else if (value < 0) {
            this._state = 0; 
        } else {
            this._state = value;  
        }        
    }
    get state(){
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(...arg) {
        super(...arg);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author,...arg) {
        super(...arg);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(...arg) {
        super(...arg);       
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(...arg) {
        super(...arg);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(...arg) {
        super(...arg);
        this.type = "detective";
    }
}
class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }    
    findBookBy(type, value) {
      for (const item of this.books) {
         if (item[type] === value) {
             return item;
         }
      }
      return null;
    }
    giveBookByName(bookName) {
      for (const item of this.books) {
          if (item.name === bookName) {
            this.books.splice(this.books.indexOf(item),1);
            return item;
          }
      }
         return null;   
    }
}
class Student {
    constructor (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    }
    addMark(mark, subject) {
       const  markOfSubject = this.marks.find((subjectItem)=>subjectItem[0] === subject);   
       if (markOfSubject === undefined) {
        this.marks.push([subject,[mark]]);
       } else {
        markOfSubject[1].push(mark); 
       }   
    }
    getAverageBySubject(subject) {
        let sum = 0;
        const   markOfSubject = this.marks.find((subjectItem)=>subjectItem[0] === subject);  
        if (markOfSubject === undefined) {
         return 0;   
        } else {
            markOfSubject[1].forEach(item => sum +=item);
            return sum/markOfSubject[1].length;
        }
    }
    getAverage() {
        let sum = 0;
        let kount = 0;
        this.marks.forEach(subject => subject[1].forEach(item => sum +=item ));
        this.marks.forEach(subject =>  kount += subject[1].length);
        return sum/kount; 
    }    
}
