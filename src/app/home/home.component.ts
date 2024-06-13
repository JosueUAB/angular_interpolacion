import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  img:string='https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';
  //*arreglo
  detalle=[
    'Amando Gatos',
    'estudios confirman que los gatos pueden reducir nuestra presión sanguínea y liberar dopamina y serotonina, lo que reduce el estrés y mejora el funcionamiento inmune. Los gatos también ayudan a liberar oxitocina, que se asocia con el sentimiento de estar enamorados.',
  ];
  //*objeto
  detalle2={
    titulo:'Amando Gatos',
    detalle:'estudios confirman que los gatos pueden reducir nuestra presión sanguínea y liberar dopamina y serotonina, lo que reduce el estrés y mejora el funcionamiento inmune. Los gatos también ayudan a liberar oxitocina, que se asocia con el sentimiento de estar enamorados.',

  };
  //!interface
  Gatos=[
    {
      nombre: 'Pepinillo',
      alimento: 'wiskas',
      descripcion: 'gato cariñoso que ama a sus dueños'
    },
    {
      nombre: 'Garfield',
      alimento: 'atún',
      descripcion: 'gato perezoso y sarcástico'
    },
    {
      nombre: 'Tom',
      alimento: 'croquetas',
      descripcion: 'gato que persigue a un ratón'
    },
    {
      nombre: 'Félix',
      alimento: 'leche',
      descripcion: 'gato aventurero y curioso'
    },
    {
      nombre: 'Luna',
      alimento: 'pescado',
      descripcion: 'gata elegante y reservada'
    },
    {
      nombre: 'Simba',
      alimento: 'pollo',
      descripcion: 'gato glotón que come mucho'
    },
    {
      nombre: 'Milo',
      alimento: 'galletas',
      descripcion: 'gato dormilón que siempre duerme'
    },
    {
      nombre: 'Whiskers',
      alimento: 'hamburguesas',
      descripcion: 'gato juguetón y travieso'
    },
    {
      nombre: 'Tigger',
      alimento: 'yogurt',
      descripcion: 'gato misterioso que desaparece'
    },
    {
      nombre: 'Oliver',
      alimento: 'jamón',
      descripcion: 'gato cariñoso que busca caricias'
    },
  ];







}
