import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appDropdown]",
})
export class DropDownDirective {
    // binds the class 
    @HostBinding("class.open") isOpen: boolean = false;

    // Listens the event perform by the user
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    @HostListener('mouseleave') hoverClose() {
        this.isOpen = false;
    }
}