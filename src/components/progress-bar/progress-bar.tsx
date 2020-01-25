import { Component, Prop, h, Element, Watch, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: 'progress-bar',
  styleUrl: './progress-bar.scss',

})

export class ProgressBar {
  @Prop() progress: number;
  @Element() bar: HTMLElement;
  @Event() progressDone: EventEmitter;
  @Watch('progress')

  componentDidLoad() {
    this.updateWidth()
  }
  didChangeHandler() {
    this.updateWidth();
  }
  private updateWidth() {
    console.log('Que es bar', this.bar);

    (this.bar.children[0] as HTMLElement).style.width = this.progress + '%';
    if (this.progress == 100) {
      this.progressDoneEmitter();
    }
  }
  progressDoneEmitter() {
    this.progressDone.emit();
  }
  render() {
    return (
      <div class="progress-bar">
      </div>
    )
  }

}
