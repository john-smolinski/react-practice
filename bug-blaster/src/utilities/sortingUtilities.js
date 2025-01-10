export const sortTickets = (tickets, preference) => {
  switch (preference) {
    case "High to Low":
      return [...tickets].sort((a, b) => b.priority.localeCompare(a.priority));
    case "Low to Hiegh":
      return [...tickets].sort((a, b) => a.priority.localeCompare(b.priority));
    default:
      return tickets;
  }
};
