export function formatDate(date: string) {
  return date ? new Date(date).toLocaleDateString() : null;
}
