import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  imagenes: Array<Array<String>> = [
    ["https://hamptonroads.myactivechild.com/files/3915/5133/0600/Gaming.png","Sala gamer verde"],
    ["https://pbs.twimg.com/media/DjnNZz0U8AUNxnd.jpg","Sala gamer verde de dos columnas"],
    ["https://ecetia.com/files/2014/09/Sevilla-Gaming-Center-4-800x533.jpg","Sala matutina de entretenimiento"],
    ["https://lh3.googleusercontent.com/WBh2JtWhSLH0hR7qvh_JiXs_BfxJc4nkNorv5T5CqPlBX4YRLAA-SCEMLu1QuubBpvje_mwj05RyGx1zEA=w1080-h608-p-no-v0","Sala de LOL y Fortnite"],
    ["https://wearesocial-net.s3.amazonaws.com/wp-content/uploads/2020/11/gamer_room.jpg","Espacio personal gamer"],
    ["https://hardzone.es/app/uploads-hardzone.es/2020/01/Gaming-PC-01.jpg","Escritorio gamer"],
    ["https://calendario366.com/wp-content/uploads/2020/06/a8998c1f3f275cbd8102b1c4767747e1-1024x767.jpg","Escritorio gamer Legendario"],
    ["https://lajornadanet.com/wp-content/uploads/2019/12/foto1.jpg","Sala gamer estilo nocturno"],
    ["https://www.nacion.com/resizer/1_pxIO_5x96EfdPAiaPgp7MemvU=/600x0/center/middle/filters:quality(100)/d3hlpvman0fu3y.cloudfront.net/11-30-2019/t_62351e59951840d6be87c6f17b7578dc_name_t_7fdd77f067914433be93ade630ecd7d0_name_Infinity_Gaming_CEnter_.jpg","Sala de LOL"],
    ["https://i.pinimg.com/originals/5b/7d/36/5b7d36e8e0edc05aa32b70196a03b8cd.jpg","Sala gamer estilo dark"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgo7yOmRAbxQP0bGbC2w_Xss3Kkd2QQBnvg&usqp=CAU","GG Network gaming center"],
    ["http://itsitiojannah.wpengine.com/wp-content/uploads/d/e/sites/17/2015/10/ITSitio_imagen1_gaming.jpg","Sala gamer estilo mirror"],
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
