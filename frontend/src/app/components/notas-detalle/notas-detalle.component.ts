import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { NotasService } from '../../services/notas.service';
import { Nota } from '../../models/nota';

@Component({
  selector: 'app-notas-detalle',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './notas-detalle.component.html',
  styleUrl: './notas-detalle.component.css'
})
export class NotasDetalleComponent implements OnInit {
  nota: Nota | null = null;
  notaId: string = '';

  constructor(
    private notasService: NotasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.notaId = this.route.snapshot.paramMap.get('id') || '';
    this.notasService.getNotaById(this.notaId)
      .subscribe(data => this.nota = data);
  }

  editar() { this.router.navigate(['/notas/editar', this.notaId]); }

  borrar() {
    if (confirm('Seguro que queres borrar esta nota?')) {
      this.notasService.eliminarNota(this.notaId)
        .subscribe(() => this.router.navigate(['/notas']));
    }
  }

  volver() { this.router.navigate(['/notas']); }
}
