import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  preguntas: {pregunta: string, respuesta1: string, respuesta2: string, respuesta3: string} [] =  [
    {
      pregunta : 'Tienes una sensación de tristeza desde:',
      respuesta1 : 'Hace poco y no me impide hacer mi vida normal.',
      respuesta2: 'Dos años (o más), pero sigo con mi vida normal.',
      respuesta3: 'No sé cuanto, pero si que no puedo hacer lo que hacía.'
    },
    {
      pregunta : 'Respecto a tus actividades lúdicas y tu vida social',
      respuesta1 : 'No salgo nunca.',
      respuesta2: 'Las sigo haciendo con normalidad.',
      respuesta3: 'Me cuesta hacer la misma vida que antes y quedar con otras personas'
    },
    {
      pregunta : '¿Te notas falta de energía?',
      respuesta1 : 'Con cierta frecuencia.',
      respuesta2: 'A diario.',
      respuesta3: 'Algunos días, pero se me pasa rápido. '
    },
    {
      pregunta : 'Cuando intentas concentrarte...',
      respuesta1 : 'Lo hago sin ningún problema.',
      respuesta2: 'Me cuesta. Tengo que volver una y otra vez sobre ello.',
      respuesta3: 'Me resulta imposible.'
    },
    {
      pregunta : '¿Te cuesta tomar decisiones?',
      respuesta1 : 'Sí, cada día.',
      respuesta2: 'Con frecuencia.',
      respuesta3: 'No.'
    },
    {
      pregunta : '¿Cómo sueles dormir?',
      respuesta1 : 'Con frecuencia o tengo insomnio o duermo demasiadas horas.',
      respuesta2: 'Más o menos bien.',
      respuesta3: 'Duermo mucho (más de lo normal), no me levantaría.'
    },
    {
      pregunta : '¿Habitualmente tienes apetito?',
      respuesta1 : 'Nunca.',
      respuesta2: 'No como antes.',
      respuesta3: 'Lo que es normal en mí.'
    },
    {
      pregunta : '¿Tienes o has tenido pensamientos fatalistas?',
      respuesta1 : 'No.',
      respuesta2: 'Sí, vienen a mi mente con frecuencia.',
      respuesta3: 'A veces, pero consigo apartarlos.'
    },
    {
      pregunta : '¿Has dejado de disfrutar de cosas que te gustaban?',
      respuesta1 : 'Casi nada me satisface.',
      respuesta2: 'No, sigo haciéndolas.',
      respuesta3: 'Todo me desagrada.'
    },
    {
      pregunta : '¿Has descuidado tu aspecto?',
      respuesta1 : 'Sí, mi aspecto ha dejado de importarme.',
      respuesta2: 'Un poco, cada vez me da más pereza arreglarme.',
      respuesta3: 'No. Eso, jamás.'
    },
    {
      pregunta : '¿Haces ejercicio cada semana?',
      respuesta1 : 'Sí.',
      respuesta2: 'Nunca. Y no me apetece.',
      respuesta3: 'Trato de evitarlo porque no me motiva.'
    },
    {
      pregunta : '¿Tomas comida "basura"?',
      respuesta1 : 'Me va a temporadas.',
      respuesta2: 'Sí, no suelo cocinar.',
      respuesta3: 'No.'
    },

  ];




  constructor( private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  submit() {
    console.log('Gracias');
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'Tu puntaje fue de: 17',
      message: 'Tranquilo solo estás triste.',
      buttons: [
        {
          text: 'Siguiente',
          handler: () => {
            this.router.navigateByUrl('/tabs/home');
          }
        }
      ]
    });
  
    await alert.present();
  }
}
