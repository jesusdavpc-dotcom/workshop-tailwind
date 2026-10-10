// Datos del catálogo (los mismos en los cinco proyectos)
export const productos = [
  { id: 1, nombre: 'Camiseta básica', categoria: 'hombre', precio: 45000 },
  { id: 2, nombre: 'Jean slim', categoria: 'hombre', precio: 120000 },
  { id: 3, nombre: 'Vestido floral', categoria: 'mujer', precio: 120000 },
  { id: 4, nombre: 'Blusa de lino', categoria: 'mujer', precio: 85000 },
  { id: 5, nombre: 'Gorra clásica', categoria: 'accesorios', precio: 35000 },
  { id: 6, nombre: 'Tenis blancos', categoria: 'accesorios', precio: 210000 },
]
 
// Formato de pesos colombianos: 45000 → $ 45.000
export const formatoPesos = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})
