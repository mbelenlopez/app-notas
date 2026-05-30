import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotasService } from '../../services/notas.service';
import { Nota } from '../../models/nota';

@Component({
  selector: 'app-notas-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notas-form.component.html',
  styleUrl: './notas-form.component.css'
})
export class NotasFormComponent implements OnInit {
  nota: Nota = { titulo: '', contenido: '' };
  esEdicion = false;
  notaId: string | null = null;

  constructor(
    private notasService: NotasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.notaId = this.route.snapshot.paramMap.get('id');
    if (this.notaId) {
      this.esEdicion = true;
      this.notasService.getNotaById(this.notaId)
        .subscribe(data => this.nota = data);
    }
  }

  guardar(): void {
    if (!this.nota.titulo || !this.nota.contenido) return;
    if (this.esEdicion && this.notaId) {
      this.notasService.actualizarNota(this.notaId, this.nota)
        .subscribe(() => this.router.navigate(['/notas']));
    } else {
      this.notasService.crearNota(this.nota)
        .subscribe(() => this.router.navigate(['/notas']));
    }
  }

  cancelar(): void { this.router.navigate(['/notas']); }
}
