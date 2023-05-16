//Написати функцію додавання,віднімання грошей до балансу та підвязати її до аккаунту
//Написати функцію обнулення рахунку

// const account = {
//   balance: 0,
// };
// function addMoney(amount) {
//   console.log(this);
//   this.balance += amount;
// }
// addMoney.call(account, 300);

// addMoney.apply(account, [300]);


// const bindAddMoney = addMoney.bind(account);
// console.log(bindAddMoney);
// bindAddMoney(400);
// bindAddMoney(500);
// console.log(account);
// addMoney(300);


///Додати classTutor2 всі методи classTutor1

const classTutor1 = {

    students: [{name:'kriss',grades:{math: 9,geography: 10,physics:7}},
    {name:'jane',grades:{math: 6,geography: 10,physics:7}},
    {name:'alex',grades:{math: 9,geography: 4,physics:7}},
    {name:'gregory',grades:{math: 12,geography: 12,physics:12}},
    {name:'steve',grades:{math: 11,geography: 8,physics:6}},
    {name:'julia',grades:{math: 4,geography: 9,physics:6}},],


    getStudents(){
        return this.students
    },
    addStudent(name,math,geography,physics){
      this.students.push({name,grades:{math,geography,physics}}) 
          }
        }

        const classTutor2 = {

          students: [{name:'kriss',grades:{math: 9,geography: 10,physics:7}},
                { name: 'jane', grades: { math: 6, geography: 10, physics: 7 } }],
            
            getStudents: classTutor1.getStudents.bind(classTutor1),
            addStudent: classTutor1.addStudent
            
}
        
        // console.log(classTutor1.getStudents);
        // console.log(classTutor2.addStudent("Max", 12, 7, 10));
        // console.log(classTutor2.getStudents());
        console.log(classTutor2.getStudents());

        
        