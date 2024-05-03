import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DemoComponent, NgIf]
})
export class AppComponent {
  title = 'LifecycleHook';

  inputText: string = '';
  destroy: boolean = true;
  
  onSubmit(inputEl: HTMLInputElement){
    this.inputText = inputEl.value;
  }

  DestroyComponent(){
    this.destroy = false;
  }
}
