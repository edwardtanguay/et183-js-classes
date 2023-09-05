import './style.css';
import rawPersons from './data/persons.json';
import { Person} from './classes/person';
import { IPerson } from './classes/interfaces';
import { Customer } from './classes/customer';
import { Employee } from './classes/employee';

export const instantiatePerson = (person: IPerson) => {
	switch (person.kind) {
		case 'customer':
			return new Customer(person.firstName, person.lastName);
		case 'employee':
			return new Employee(person.firstName, person.lastName);
	}
}

const persons: Person[] = [];
for (const rawPerson of rawPersons) {
	const person = instantiatePerson(rawPerson);
	if (person) {
		persons.push(person);
	}
}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<div>
	<h1 class="text-3xl text-gray-900">Conference Preparation Site</h1>

	<h2 class="text-2xl mt-3 mb-2 text-yellow-300">Attendance List</h2>
	${persons.map(m => `<div>${m.getNametagText()}`).join('')}

	<h2 class="text-2xl mt-3 mb-2 text-yellow-300">Nametags</h2>
	${persons.map(m => `<div>${m.getNametagHtml()}`).join('')}
</div>
`;