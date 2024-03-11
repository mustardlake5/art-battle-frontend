export function getMatchResult(
  win: number,
  lose: number
): "win" | "lose" | "draw" {
  if (win > lose) {
    return "win";
  }
  if (win < lose) {
    return "lose";
  }
  return "draw";
}
