import {Component} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/RX';

@Component({
	selector: "app",
	outputs: ['detail'],
	template: `
			<div>Hello World</div>
			<div style="background:lightblue">
				<code>{{person_name}}</code>
			</div>
				
			<input type="text" [(ngModel)]="selectedPerson.first_name" />

			<input type="text" [ngModel]="ip_address" />

	
			<div style="column-count: 2">
				<ul>
				<li *ngFor="let person of persons" (click)=getSelected(person)>
					{{person.first_name}}
				</li>
			</ul>
			</div>
			<div style="column-count: 2">
				<pre>
					{{ data | json }}
				</pre>
			</div>
			


	`
})


export class App {
	data : Object;
	person_name: string;
	persons: Object;
	selectedPerson: Object = {};
	ip_address: string;

	constructor(http: Http) {
		http.get("./data")
			//.flatMap((data) => data.json()) 				// can be used using rxjs
			.subscribe((res	: Response) => {

				this.data = res.json();
				this.persons = this.data;
				this.person_name = this.data[5].first_name;

			})

			
	}

	getSelected(person: Object){
		this.selectedPerson = person;
		this.ip_address = person["ip_address"];
		console.log(`ip_address is ${this.ip_address}`);
	}

}