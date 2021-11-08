export default function playerHandler(players_Team, teamJSON) {
  const filtered = teamJSON.filter((t) => t.ta === players_Team);
  // Players team has been found 
  if (filtered.length > 0) {
    return filtered[0].logo
  } else {
    res.status(404).json({ message: `NBA Players team not found` })
  }
}
