import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSearch(value: string) {
    console.log("Buscar -->" + value);
    if (value && value.length > 3) {
      this.router.navigate(['detail/:id'], {
        queryParams: { q: value }
      })
        .then(() => console.log('Navigated to search'))
        .catch(console.error);
    }
  }
}

