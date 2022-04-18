export const getNbCompletedChallenges = (type) => {
  let nbCompletedChallenges = 0;
  type.levels.map((level) => {
    const instance = JSON.parse(localStorage.getItem(level.name) || null);
    if (instance && instance.completed) {
      nbCompletedChallenges += 1;
    }
    return nbCompletedChallenges;
  });
  return nbCompletedChallenges;
};

export const getPercentage = (type) => (getNbCompletedChallenges(type) / type.levels.length) * 100;
