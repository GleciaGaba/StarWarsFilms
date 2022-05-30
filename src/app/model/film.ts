export class Film {
    title: string;
    episode_id: number;
    opening_crawl:string;
    director: string;
    producer:string;
    release_date: Date;
    
    constructor( paramTitle:string,paramEpisodeId: number, paramOpeningCrawl: string, paramDirector:string, 
        paramProducer:string, paramReleaseDate:Date ){
            this.title = paramTitle;
            this.episode_id = paramEpisodeId;
            this.opening_crawl= paramOpeningCrawl; 
            this.director = paramDirector;
            this.producer = paramProducer;
            this.release_date = paramReleaseDate;
        }
}
