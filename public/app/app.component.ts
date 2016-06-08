import {Component} from "@angular/core";
import {Http} from "@angular/http";

@Component({
	selector: "app",
	template: `
			<div>Hello World</div>
			<div style="background:lightblue">
				<code>{{person_name}}</code>
			</div>
	`
})


export class App {
	response: string;
	person_name: string;
	constructor(http: Http) {
		http.get("./data")
			.subscribe((data) => {
				this.response = JSON.parse(data._body);
				console.log(this.response[0]["first_name"])
				this.person_name = this.response[0]["first_name"];
			})
	}
}