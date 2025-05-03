const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/carros';

export async function fetchBrands() {
  const res = await fetch(`${BASE_URL}/marcas`);
  if (!res.ok) throw new Error('Erro - Brand!');
  return res.json();
}

export async function fetchModels(brandCode) {
  const res = await fetch(`${BASE_URL}/marcas/${brandCode}/modelos`);
  if (!res.ok) throw new Error('Error - Model!');
  return res.json();
}

export async function fetchYears(brandCode, modelCode) {
  const res = await fetch(`${BASE_URL}/marcas/${brandCode}/modelos/${modelCode}/anos`);
  if (!res.ok) throw new Error('Error - Year!');
  return res.json();
}

export async function fetchPrice(brandCode, modelCode, yearCode) {
  const res = await fetch(`${BASE_URL}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`);
  if (!res.ok) throw new Error('Error - Price!');
  return res.json();
}
