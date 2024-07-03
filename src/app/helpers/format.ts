export function formatDate(date: string): string {
  const newDate = new Date(date);

  return newDate.toLocaleString('en-US', {
    day: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    weekday: 'long',
  })
}
