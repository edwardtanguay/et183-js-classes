import { Customer } from './classes/customer';
import { Employee } from './classes/employee';
import './style.css';

const person1 = new Customer('Lena', 'Weber');
const person2 = new Employee('Matthias', 'Schneider');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<div>
	<h1 class="text-3xl mb-4">Conference Preparation Site</h1>

	<h2 class="text-2xl mb-3">Nametags</h2>

	<div>${person1.getNametagText()}</div>
	<div>${person2.getNametagText()}</div>
</div>
`;