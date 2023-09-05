import { Customer } from './classes/customer';
import { Employee } from './classes/employee';
import './style.css';

const person1 = new Customer('Lena', 'Weber');
const person2 = new Employee('Matthias', 'Schneider');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<div>
	<h1 class="text-3xl text-gray-900">Conference Preparation Site</h1>

	<h2 class="text-2xl mt-3 mb-2 text-yellow-300">Attendance List</h2>
	<div>${person1.getNametagText()}</div>
	<div>${person2.getNametagText()}</div>

	<h2 class="text-2xl mt-3 mb-2 text-yellow-300">Nametags</h2>
	<div>${person1.getNameTagHtml()}</div>
	<div>${person2.getNameTagHtml()}</div>
</div>
`;