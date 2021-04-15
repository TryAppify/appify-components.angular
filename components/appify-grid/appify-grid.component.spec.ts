import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AppifyGridComponent } from "./appify-grid.component";

describe("AppifyGridComponent", () => {
    let component: AppifyGridComponent;
    let fixture: ComponentFixture<AppifyGridComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppifyGridComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppifyGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
