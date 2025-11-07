// 1) Edad en meses
function calcularEdadEnMeses(fechaNacimientoStr) {
  const hoy = new Date();
  const fn = new Date(fechaNacimientoStr);
  const años = hoy.getFullYear() - fn.getFullYear();
  const meses = hoy.getMonth() - fn.getMonth();
  const totalMeses = años * 12 + meses;
  return totalMeses < 0 ? 0 : totalMeses;
}

// 2) Resumen de la cartilla (tarjetas del lado derecho)
function actualizarResumenCartilla(vacunasUsuario, fechaNacimientoStr) {
  const totalEsquema = VACUNAS_ESQUEMA.length;

  const completas = VACUNAS_ESQUEMA.filter(esq =>
    vacunasUsuario.some(v => v.idEsquema === esq.idEsquema)
  ).length;

  const elemCompletas = document.getElementById('resVacunasCompletas');
  const elemCompletasTag = document.getElementById('resVacunasCompletasTag');
  const elemProgresoTexto = document.getElementById('resProgresoTexto');
  const elemProgresoBar = document.getElementById('resProgresoBar');

  if (elemCompletas) elemCompletas.textContent = completas;

  if (elemCompletasTag) {
    elemCompletasTag.textContent =
      totalEsquema > 0
        ? `Has completado ${completas} de ${totalEsquema} vacunas del esquema.`
        : 'No hay esquema configurado.';
  }

  const porcentaje =
    totalEsquema === 0 ? 0 : Math.round((completas / totalEsquema) * 100);

  if (elemProgresoTexto) {
    elemProgresoTexto.textContent = `${completas} / ${totalEsquema} (${porcentaje}%)`;
  }
  if (elemProgresoBar) {
    elemProgresoBar.style.width = `${porcentaje}%`;
  }

  // Próximas dosis
  const edadMeses = calcularEdadEnMeses(fechaNacimientoStr);

  const faltantes = VACUNAS_ESQUEMA.filter(esq =>
    !vacunasUsuario.some(v => v.idEsquema === esq.idEsquema)
  );

  const proximas = faltantes.filter(esq =>
    esq.edadMinMeses != null &&
    esq.edadMinMeses >= edadMeses &&
    esq.edadMinMeses <= edadMeses + 1
  );

  const elemProximas = document.getElementById('resProximasDosis');
  const elemProximasTag = document.getElementById('resProximasDosisTag');

  if (elemProximas) elemProximas.textContent = proximas.length;

  if (elemProximasTag) {
    if (proximas.length === 0) {
      elemProximasTag.textContent = 'Sin dosis próximas en el mes.';
    } else {
      const nombres = [...new Set(proximas.map(p => p.nombreVacuna))].slice(0, 3);
      elemProximasTag.textContent = `Próximas: ${nombres.join(', ')}${
        proximas.length > 3 ? '…' : ''
      }`;
    }
  }

  // Alertas (vacunas atrasadas)
  const atrasadas = faltantes.filter(esq =>
    esq.edadMinMeses != null &&
    esq.edadMinMeses < edadMeses
  );

  const elemAlertas = document.getElementById('resAlertas');
  const elemAlertasTag = document.getElementById('resAlertasTag');

  if (elemAlertas) elemAlertas.textContent = atrasadas.length;

  if (elemAlertasTag) {
    if (atrasadas.length === 0) {
      elemAlertasTag.textContent = 'Sin alertas por el momento.';
    } else {
      const nombresAtrasadas = [...new Set(atrasadas.map(a => a.nombreVacuna))].slice(0, 3);
      elemAlertasTag.textContent = `Revisa: ${nombresAtrasadas.join(', ')}${
        atrasadas.length > 3 ? '…' : ''
      }`;
    }
  }
}

// 3) Cartilla (tablas de la izquierda)
function renderCartilla(vacunasUsuario) {
  const grupos = {
    'MENOR_10': document.getElementById('tbodyEsquemaNino'),
    'ADOLESCENTE': document.getElementById('tbodyEsquemaAdolescente'),
    'ADULTO': document.getElementById('tbodyEsquemaAdulto')
  };

  Object.values(grupos).forEach(tbody => tbody && (tbody.innerHTML = ''));

  VACUNAS_ESQUEMA.forEach(esq => {
    const tbody = grupos[esq.grupoEdad];
    if (!tbody) return;

    const aplicada = vacunasUsuario.some(v => v.idEsquema === esq.idEsquema);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${esq.nombreVacuna}</td>
      <td>${esq.descripcionEdad}</td>
      <td>${esq.dosisNumero} de ${esq.totalDosis}</td>
      <td>
        <span class="badge ${aplicada ? 'badge-ok' : 'badge-pending'}">
          ${aplicada ? 'Completada' : 'Pendiente'}
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 4) Datos de prueba (luego esto lo cambias por datos reales desde tu API)
const vacunasUsuarioPrueba = [
  { idEsquema: 'BCG_1',   fechaAplicacion: '2024-01-10' },
  { idEsquema: 'HEPB_1',  fechaAplicacion: '2024-01-15' },
  { idEsquema: 'PENTA_1', fechaAplicacion: '2024-03-10' },
  { idEsquema: 'PENTA_2', fechaAplicacion: '2024-05-10' }
];

const fechaNacimientoPrueba = '2024-01-01';

// 5) Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
  renderCartilla(vacunasUsuarioPrueba);                         // tablas de la izquierda
  actualizarResumenCartilla(vacunasUsuarioPrueba, fechaNacimientoPrueba); // tarjetas y barra
  renderCartillaMatriz(vacunasUsuarioPrueba);                   // cartilla tipo papel abajo
});

// Definimos qué vacunas queremos mostrar en la "cartilla física"
const CARTILLA_MATRIZ = [
  { clave: 'BCG',  nombre: 'BCG',                    slots: ['1', '',  '',  'R'] },
  { clave: 'HEPB', nombre: 'Hepatitis B',            slots: ['1', '2','3',  ''  ] },
  { clave: 'PENTA',nombre: 'Pentavalente acelular',  slots: ['1', '2','3', 'R'] },
  { clave: 'ROTA', nombre: 'Rotavirus',              slots: ['1', '2','3',  ''  ] },
  { clave: 'NEUMO',nombre: 'Neumococo conjugada',    slots: ['1', '2','3',  ''  ] },
  { clave: 'SRP',  nombre: 'SRP (SRP)',              slots: ['1', '2','',  ''  ] },
  { clave: 'DTP',  nombre: 'DTP (refuerzo)',         slots: ['R', '',  '',  ''  ] }
  // puedes agregar más filas (VPH, Td, Influenza, etc.)
];

// Render de la cartilla tipo papel
function renderCartillaMatriz(vacunasUsuario) {
  const tbody = document.getElementById('tbodyCartillaMatriz');
  if (!tbody) return;
  tbody.innerHTML = '';

  CARTILLA_MATRIZ.forEach(vac => {
    const tr = document.createElement('tr');

    // Columna nombre
    tr.innerHTML = `<td>${vac.nombre}</td>`;

    // Para cada "slot" (1a, 2a, 3a, Refuerzo)
    vac.slots.forEach((slotEtiqueta, index) => {
      const td = document.createElement('td');
      td.classList.add('slot');

      if (!slotEtiqueta) {
        td.innerHTML = '&nbsp;'; // celda vacía
      } else {
        // buscamos si hay alguna vacuna aplicada que coincida
        const aplicada = vacunasUsuario.find(vu => {
          const esquema = VACUNAS_ESQUEMA.find(e => e.idEsquema === vu.idEsquema);
          if (!esquema) return false;
          if (esquema.claveVacuna !== vac.clave) return false;

          // mapear slot 0,1,2,3 con dosisNumero o refuerzo
          const esRefuerzo = slotEtiqueta === 'R';
          if (esRefuerzo) return esquema.dosisNumero >= 2 && esquema.totalDosis === esquema.dosisNumero;
          return esquema.dosisNumero === Number(slotEtiqueta);
        });

        if (aplicada) {
          td.innerHTML = `<span class="slot-aplicada">${aplicada.fechaAplicacion}</span>`;
        } else {
          td.innerHTML = `<span class="slot-pendiente">${slotEtiqueta}ª</span>`;
        }
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
  
}
