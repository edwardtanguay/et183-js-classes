import { Customer } from "./customer";
import { Employee } from "./employee";
import { IPerson } from "./interfaces";

export const instantiatePerson = (person: IPerson) => {
	switch (person.kind) {
		case 'customer':
			return new Customer(person.firstName, person.lastName);
		case 'employee':
			return new Employee(person.firstName, person.lastName);
	}
}