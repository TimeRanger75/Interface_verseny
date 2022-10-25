interface Result{
    winner: string;
    Date: Date;
    result(): string; 
}

class Football implements Result{
    winner: string;
    Date:Date;
    #home_scores: number;
    #away_scores: number;

    constructor(winner:string, home_scores:number, away_scores:number, Date:Date){
        this.winner=winner;
        this.#home_scores=home_scores;
        this.#away_scores=away_scores;
        this.Date=Date;
    }

    result(): string {
       return "Football match"+this.#home_scores+":"+this.#away_scores;
    }

}


class Marathon implements Result{
    winner: string;
    Date:Date;
    result_time: number;

    constructor(winner:string, Date:Date, result_time:number){
        this.winner=winner;
        this.Date=Date;
        this.result_time=result_time;
    }

    result(): string {
        let result_time_min=Math.floor(this.result_time/60);
        let result_time_sec=this.result_time-result_time_min*60;
        return "Maraton: "+result_time_min+" min "+result_time_sec+" sec";
    }
    
}



class Calvinball implements Result{
    winner: string;
    Date:Date;
    outcome:number;

    constructor(winner:string, Date:Date){
        this.winner=winner;
        this.Date=Date;
        this.outcome=Math.floor(Math.random()*101)+10;
    }

    getWinner():string{
        return this.winner;
    }

    setWinner(winner:string):void{
        if(this.winner=="Calvin" || this.winner=="Hobbes"){
            this.winner=winner;
        }
        else{
            console.log("The winners're only can be Calvin or Hobbes");
        }
    }

    
    result(): string {
        return "Calvinball: "+this.outcome+" points";
    }
    
}


let result: Result[]=[
    new Football("Barcelona",4,5, new Date(2020-6-10)),
    new Football("Celtic",1,0,new Date(1999,2,26)),
    new Marathon("Cole Williams", new Date(2012,8,6), 12578),
    new Marathon("John Doe", new Date(2021-11-24), 15487),
    new Calvinball("Calvin",new Date(1972-3-11)),
    new Calvinball("Michael", new Date(1998-12-28))
    ];
for(let results of result){
   // console.log(results.result());
   if(results.winner=="Calvin"){
    console.log(results.result());
   }
   console.log(results.result());

}