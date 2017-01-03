import { Page } from 'ui/page';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const query = gql`
  {
    films: allFilms(first: 10) {
      totalCount
      edges {
        node {
          title
        },
        cursor
      }
    }
  }
`;

@Component({
  selector: 'app-films',
  template: `
    <ActionBar [title]="title"></ActionBar>
    <ActivityIndicator [busy]="loading | async"></ActivityIndicator>
    <GridLayout rows="*">
      <ListView [items]="films | async" class="small-spacing">
        <template let-item="item">
          <StackLayout>
            <Label textWrap="true" [text]='item.node.title'></Label>
          </StackLayout>
        </template>
      </ListView>
    </GridLayout>
  `
})
export class FilmsComponent implements OnInit {

  title = 'Films';

  films: Observable<any>;

  loading = new BehaviorSubject(false);

  constructor(private apollo: Angular2Apollo) { }

  ngOnInit() {

    this.loading.next(true);

    this.films = this.apollo.watchQuery({ query })
      .do(() => this.loading.next(false))
      .map(({data}) => data.films.edges)
  }

};
