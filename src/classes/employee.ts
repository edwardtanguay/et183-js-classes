import { Person } from "./person";

export class Employee extends Person {

	constructor(firstName: string, lastName: string) {
		super(firstName, lastName);
		this._kind = 'employee';
	}
}
