"use strict";
class Person {
    constructor() {
        this.name = "";
    }
}
class Employee extends Person {
    constructor(pId, pName, pDept) {
        super(); // Llamada al constructor padre si no marca error
        // atributos
        this.id = 0;
        this.dept = "";
        this.city = "Santo Domingo";
        this.name = pName;
        this.dept = pDept;
        this.id = pId;
        console.log("Hello");
        this.Show_Info();
    }
    // la propiedad dept es private solo se puede acceder de su misma clase
    // la propiedad city de la clase padre es protected por lo que si podemos acceder desde la clase hija
    // metodos
    Show_Info() {
        console.log(`${this.name} ${this.dept} ${this.id} ${this.city}`);
    }
}
const emp = new Employee(1, "manuel", "sales");
// Propiedades publicas
// emp.id
// emp.name
// No permite acceder a dept por que es private
//emp.dept
