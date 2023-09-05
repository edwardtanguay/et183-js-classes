import { Person } from "./person";

export class Customer extends Person {

	constructor(firstName: string, lastName: string) {
		super(firstName, lastName);
		this._kind = 'customer';
	}
	
}