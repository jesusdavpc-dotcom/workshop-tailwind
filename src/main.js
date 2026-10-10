import './style.css'
import { productos, formatoPesos } from './datos.js'
 
const carrito = []
const app = document.querySelector('#app')
 
// Paso B: encabezado con el carrito y botones que agregan productos
function render() {
  const total = carrito.reduce((suma, p) => suma + p.precio, 0)
 
  app.innerHTML = `
    <header class="flex flex-wrap items-center justify-between gap-4 bg-neutral-900 px-8 py-4 text-white">
      <h1 class="text-xl font-bold">Brisa Moda · Tailwind</h1>
      <span class="rounded-full bg-orange-500 px-4 py-1 font-semibold">
        Carrito: ${carrito.length} · ${formatoPesos.format(total)}
      </span>
    </header>
    <main class="mx-auto max-w-5xl px-4 py-6">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        ${productos
          .map(
            (p) => `
          <article class="flex flex-col gap-1.5 rounded-xl bg-white p-4 shadow-md">
            <p class="text-sm capitalize text-neutral-500">${p.categoria}</p>
            <h2 class="font-semibold">${p.nombre}</h2>
            <p class="font-bold">${formatoPesos.format(p.precio)}</p>
            <button data-id="${p.id}" class="mt-auto rounded-md bg-orange-500 py-2 text-white hover:bg-orange-600">
              Agregar
            </button>
          </article>`,
          )
          .join('')}
      </div>
    </main>`
}
 
app.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button')
  if (!boton) return
  carrito.push(productos.find((p) => p.id === Number(boton.dataset.id)))
  render()
})
 
render()
