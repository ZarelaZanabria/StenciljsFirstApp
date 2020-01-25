import { Component, Prop,h, EventEmitter, Event } from "@stencil/core";

@Component({
  tag : 'slider-app',
  styleUrl : './slider.scss'
})

export class SliderComponent {

 @Prop() min : number;
 @Prop() max : number;
 @Prop() value : number;
 @Event() valueChanged : EventEmitter;

 valueChangeHandler(event:any){
   console.log('Event que emite', event.target.value );

   this.valueChanged.emit(event.target.value);

 }

 render(){
   return (
     <div class="slider-container">
      <input type="range"
      min={this.min}
      max={this.max}
      value={this.value}
      class="slider"
      onChange={(event)=>this.valueChangeHandler(event)}></input>
     </div>
   )
 }

}
