// 1. Створити клас Людина.
//     - Властивості:
//       - імʼя;
//       - стать.
//     - Методи:
//       - конструктор, який приймає два параметри: імʼя та стать.
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

// 2. Створити клас Квартира.
//     - Властивості:
//       - конструктор не потрібен;
//       - масив жителів, який при створенні пустий.
//     - Методи:
//       - додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
class Apartment {
    population = [];
    addResident(person) {
        this.population.push(person);
        return this;
    }
}

// 3. Створити клас Будинок.
//     - Властивості:
//       - масив квартир, який при створенні пустий;
//       - максимальна кількість квартир.
//     - Методи:
//       - конструктор, який приймає один параметр: максимальну кількість квартир;
//       - додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
//         чи не буде кількість перевищувати максимальну кількість квартир,
//         і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class House {
    apartments = [];
    constructor(maxApartments) {
        this.maxApartments = maxApartments;
    }
    addApartment(apartment) {
        if (this.apartments.length >= this.maxApartments)
            console.log('The house is full! o_O');
        else
            console.log(`Apartment is added! Apartment #${this.apartments.push(apartment)}`);

        return this;
    }
}



// В якості демонстраціїї створити:
// - декілька екземплярів класу Людина;
// - декілька екземплярів класу Квартира;
// - додадити екземпляри класу Людина до екземплярів класу Квартира;
// - екземпляр класу Будинок;
// - додадити екземпляри класу Квартира до екземплярів класу Будинок.
const person1 = new Person('Anthony', 'male');
const person2 = new Person('Klara', 'female');
const person3 = new Person('Sam', 'male');
const person4 = new Person('Marta', 'female');
const person5 = new Person('John', 'male');
const person6 = new Person('Olga', 'female');

const apartment1 = new Apartment().addResident(person1).addResident(person4);
const apartment2 = new Apartment().addResident(person2).addResident(person5);
const apartment3 = new Apartment().addResident(person3).addResident(person6);

const house =
    new House(2)
        .addApartment(apartment1)
        .addApartment(apartment2)
        .addApartment(apartment3);
