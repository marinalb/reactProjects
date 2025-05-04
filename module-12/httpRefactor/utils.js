
export function isValidString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(value.replace('R$', '').replace('.', '').replace(',', '.')));
}
