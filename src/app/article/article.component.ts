import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: [ './article.component.css' ]
})
export class ArticleComponent implements OnInit {
	@HostBinding('attr.class') cssClass = 'row'; // In Angular, a component host is the element this component is attached to.
	votes: number;
	title: string;
	link: string;

	constructor() {
		this.title = 'Angular';
		this.link = 'http://angular.io';
		this.votes = 10;
	}

	voteUp(): boolean {
		this.votes += 1;
		return false;    // tells the browser not to propagate the event upwards
	}

	voteDown(): boolean {
		this.votes -= 1;
		return false;      
	}

	ngOnInit() {}
}
