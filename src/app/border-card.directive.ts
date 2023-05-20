import { Directive, ElementRef,HostListener } from '@angular/core';
//ElementRef pour representer une reference vers un card
//HostListener pour detecter les evenements gerer par l'utilisateur
@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  constructor( private el:ElementRef) {
    this.setHeight(180); 
    this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

  private setHeight(height:number){
    this.el.nativeElement.style.height=`${height}px`;
  }

  private setBorder(color:string){
    this.el.nativeElement.style.border=`solid 4x ${color}`;
  }

}
