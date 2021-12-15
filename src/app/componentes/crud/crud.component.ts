import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images = any;
  erro: any;

  constructor(private cruService: CrudService) { 
    this.getter();
   }

  ngOnInit(): void {}
  getter() {
    this.cruService.getApi().subscribe(data => {
      this.images = data;
      console.log('Dados que recebemos', data)
      console.log('A Varivael que recebemos', this.images)
    }, error => {
      this.erro = error;
      console.log('Erro: ',error)
    }
    )
  }

}
