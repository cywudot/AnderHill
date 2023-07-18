//format review dates for products

export function formatReviewDate(createdAt) {
  const reviewDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - reviewDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  if (daysDiff > 6) {
    const weeksDiff = Math.floor(daysDiff / 7);
    if (weeksDiff > 4) {
      const monthsDiff = Math.floor(weeksDiff / 4);
      if (monthsDiff > 12) {
        const yearsDiff = Math.floor(monthsDiff / 12);
        return `${yearsDiff} year${yearsDiff > 1 ? 's' : ''} ago`;
      } else {
        return `${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
      }
    } else {
      return `${weeksDiff} week${weeksDiff > 1 ? 's' : ''} ago`;
    }
  } else {
    return reviewDate.toDateString();
  }
}
