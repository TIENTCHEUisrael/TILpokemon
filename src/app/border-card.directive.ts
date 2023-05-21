import { Directive, ElementRef,HostListener,Input } from '@angular/core';
//ElementRef pour representer une reference vers un card
//HostListener pour detecter les evenements gerer par l'utilisateur
//Input va servir ici a parametrer les elements a changer pour eviter l'effet statique
@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  private initalColor:string='#f5f5f5';
  private defaultColor:string='#009688';
  private defaultHeight:number=180;
  constructor( private el:ElementRef) {
    this.setHeight(this.defaultHeight); 
    this.setBorder(this.initalColor);
  }

  @Input('pkmnBorderCard') borderColor:string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initalColor);
  }

  private setHeight(height:number){
    this.el.nativeElement.style.height=`${height}px`;
  }

  private setBorder(color:string){
    this.el.nativeElement.style.border=`solid 4x ${color}`;
  }

}
