import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardsCarroComponent } from '../../components/card/cards-carro/cards-carro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardLojaComponent } from '../../components/card/card-loja/card-loja.component';
import { FormCadastroLojaComponent } from '../../components/form/form-cadastro-loja/form-cadastro-loja.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lojas',
  imports: [
    HeaderComponent,
    FooterComponent,
    CardsCarroComponent,
    CardLojaComponent,
  ],
  templateUrl: './lojas.component.html',
  styleUrl: './lojas.component.scss',
})
export class LojasComponent {
  #dialog = inject(MatDialog);

  public openDialog(): void {
    this.#dialog.open(FormCadastroLojaComponent, {
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
