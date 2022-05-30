import { Component, OnInit,Input } from '@angular/core';
import { Film} from  'src/app/model/film';


@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
@Input() public dataFilm!: Film;
  constructor() { }

  ngOnInit(): void {
  }

}
