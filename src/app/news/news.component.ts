import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private apiService: ApiService) { }
  key = 'acd26c7565b044168cf355493ab92e2c';
  articles: any;
  loaded: boolean;

  ngOnInit() {
    this.loaded = false;
    this.getNews();
  }

  getNews() {
    this.apiService.get('news/news').subscribe(data => {
      const dataString = JSON.stringify(data);
      this.articles = JSON.parse(dataString).articles;
      this.loaded = true;
    });
  }

}
