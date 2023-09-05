import './style.css';
import rawPersons from './data/persons.json';
import { Person } from './classes/person';


const persons: Person[] = [];
for (const rawPerson of rawPersons) {
	Person.instantiate(persons, rawPerson);
}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<div>
	<h1 class="text-3xl text-gray-900">Conference Preparation Site</h1>

	<h2 class="text-2xl mt-3 mb-2 text-yellow-300">Attendance List</h2>
${persons.map(m => m.getNametagText())}

	<h2 class="text-2xl mt-3 mb-2 text-yellow-300">Nametags</h2>
</div>
`;