// 1. Criamos o formatador UMA VEZ fora da função (ganho de performance)
const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// 2. Nome da função ajustado para camelCase (formatPrice)
export function formatPrice(value) {
  // 3. Validação: se o valor for nulo ou indefinido, retorna zero formatado
  if (value === null || value === undefined) {
    return formatter.format(0);
  }

  // Converte o valor para número para garantir (caso venha como string do banco)
  const numberValue = Number(value);

  // Se não for um número válido (ex: "abc"), retorna zero formatado
  if (isNaN(numberValue)) {
    return formatter.format(0);
  }

  // Retorna o valor formatado
  return formatter.format(numberValue / 100);
}
