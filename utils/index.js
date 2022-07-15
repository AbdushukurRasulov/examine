export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const handleGradeInfo = (grade) => {
  switch (grade) {
    case 'A':
      return 'These parameters improved at least moderately, in at least two randomized controlled trials, with highly consistent evidence.'
    case 'B':
      return ' These parameters improved at least moderately, in at least one randomized controlled trial. If there were more than two trials, evidence was at least moderately consistent.'
    case 'C':
      return 'These parameters either did not improve moderately, or had highly mixed evidence.'
    case 'D':
      return 'These parameters had some evidence of harm, in randomized controlled trials.'
    case 'F':
      return ' These parameters had consistent evidence of harm, in randomized controlled trials.'
  }
}
