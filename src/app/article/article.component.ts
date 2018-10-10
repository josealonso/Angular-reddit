import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: [ './article.component.css' ]
})
export class ArticleComponent implements OnInit {
	@HostBinding('attr.class') cssClass = 'row'; // In Angular, a component host is the element this component is attached to.
  article: Article;

	constructor() {
		this.article = new Article(
      'Angular', 'http://angular.io', 10);
	}

	voteUp(): boolean {
		this.article.voteUp();
		return false;    // tells the browser not to propagate the event upwards
	}

	voteDown(): boolean {
		this.article.voteDown();
		return false;      
	}

	ngOnInit() {}
}
