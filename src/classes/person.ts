import { Customer } from "./customer";
import { Employee } from "./employee";
import { IPerson } from "./interfaces";

export class Person {

	private _firstName: string = '';
	private _lastName: string = '';
	protected _kind: string = '';

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	getFullName = () => {
		return `${this._firstName} ${this._lastName}`;
	}

	getNametagText = () => {
		return `Hello, my name is ${this.getFullName()} (${this._kind})`;
	};

	getNameTagHtml = () => {
		return /*html*/ `
			<div class="bg-slate-700 w-[15rem] flex flex-col items-center p-3 mb-3">
				<div class="text-orange-400 text-xl">${this.getFullName()}</div>
				<div>${this._kind}</div>
			</div>	
		`;
	}

	static instantiate = (persons: Person[], person: IPerson) => {
		switch (person.kind) {
			case 'customer':
				persons.push(new Customer(person.firstName, person.lastName));
				break;
			case 'employee':
				persons.push(new Employee(person.firstName, person.lastName));
				break;
		}
	}
}
