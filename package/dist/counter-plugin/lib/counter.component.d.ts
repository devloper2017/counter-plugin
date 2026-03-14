import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CounterComponent implements AfterViewInit {
    private el;
    start: number;
    end: number;
    timer: number;
    step: number;
    current: number;
    private observer;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    animateCounter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CounterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CounterComponent, "lib-counter", never, { "start": { "alias": "start"; "required": false; }; "end": { "alias": "end"; "required": false; }; "timer": { "alias": "timer"; "required": false; }; "step": { "alias": "step"; "required": false; }; }, {}, never, never, true, never>;
}
