import { Component, inject } from '@angular/core';
import { CardsCarroComponent } from '../../components/card/cards-carro/cards-carro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormLinkMarcaComponent } from '../../components/form/form-link-marca/form-link-marca.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FormCadastroMarcaComponent } from '../../components/form/form-cadastro-marca/form-cadastro-marca.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-marcas',
  imports: [
    HeaderComponent,
    FooterComponent,
    FormLinkMarcaComponent,
    CardsCarroComponent,
  ],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.scss',
})
export class MarcasComponent {
  #dialog = inject(MatDialog);

  public openDialog(): void {
    this.#dialog.open(FormCadastroMarcaComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
