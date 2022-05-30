import { Component } from '@angular/core';
import { FilmsService} from 'src/app/service/films.service';
import { Observable} from 'rxjs';
import { Film} from 'src/app/model/film'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'films star wars';
  public data!: Film;

  
  public films!:any[];
  constructor(private filmService: FilmsService){
    
  }

  ngOnInit():void{
    this.filmService.getFilm().subscribe((resp:any)=>{
      console.log(resp);
      this.films=resp.results;
    })
    // this.data=this.filmService.getFilm();
    // console.log(data);
  }
   onDisplayFilm( film:Film) {
     console.log(film);
    //  this.filmService.getFilm().subscribe((resp:any)=>{
    //   console.log(resp);
    //   this.data=resp.results;
    // })
    this.data=film;
    }
  }

