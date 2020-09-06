import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()   
export class PaisesService{
    paises: any[]=[];
    constructor(private http:HttpClient){
        console.log("servicio listo para usar")
       
        this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe((data:any) =>{
            this.paises=data;
            console.log(data)
        })
    }
    getPaises(){
      
        return this.paises;
        }

}