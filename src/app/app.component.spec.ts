import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule], // Importa FormsModule si estás utilizando ngModel en tu componente
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleElement = debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toContain('CRM Sencillo');
  });

  it('should render a list of contacts', () => {
    component.contactos = [
      { nombre: 'Juan', correo: 'juan@example.com', telefono: '1234567890' },
      { nombre: 'María', correo: 'maria@example.com', telefono: '9876543210' },
    ];

    fixture.detectChanges();

    const contactListItems = debugElement.queryAll(By.css('.contact-list li'));
    expect(contactListItems.length).toBe(2);

    // Verifica que los nombres de los contactos se muestren correctamente
    expect(contactListItems[0].nativeElement.textContent).toContain('Juan');
    expect(contactListItems[1].nativeElement.textContent).toContain('María');
  });

  it('should add a new contact', () => {
    const addButton = debugElement.query(By.css('button'));
    const nombreInput = debugElement.query(By.css('input[name="nombre"]'));
    const correoInput = debugElement.query(By.css('input[name="correo"]'));
    const telefonoInput = debugElement.query(By.css('input[name="telefono"]'));

    nombreInput.nativeElement.value = 'Nuevo Contacto';
    correoInput.nativeElement.value = 'nuevo@example.com';
    telefonoInput.nativeElement.value = '1234567890';

    nombreInput.nativeElement.dispatchEvent(new Event('input'));
    correoInput.nativeElement.dispatchEvent(new Event('input'));
    telefonoInput.nativeElement.dispatchEvent(new Event('input'));

    addButton.nativeElement.click();
    fixture.detectChanges();

    const contactListItems = debugElement.queryAll(By.css('.contact-list li'));
    expect(contactListItems.length).toBe(1);

    // Verifica que el nuevo contacto se agregue correctamente
    expect(contactListItems[0].nativeElement.textContent).toContain('Nuevo Contacto');
  });
});
