import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: [ './article.component.css' ]
})
export class ArticleComponent implements OnInit {
	@Input() article: Article;
	@HostBinding('attr.class') cssClass = 'row'; // In Angular, a component host is the element this component is attached to.

	constructor() {
		// article is populated by the Input now,
		// so we don't need anything here
	}

	voteUp(): boolean {
		this.article.voteUp();
		return false; // tells the browser not to propagate the event upwards
	}

	voteDown(): boolean {
		this.article.voteDown();
		return false;
	}

	ngOnInit() {}
}
