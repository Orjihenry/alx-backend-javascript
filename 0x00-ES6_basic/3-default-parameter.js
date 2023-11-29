export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  initialNumber = initialNumber ?? 0;
  expansion1989 = expansion1989 ?? 89;
  expansion2019 = expansion2019 ?? 19;

  return initialNumber + expansion1989 + expansion2019;
}
