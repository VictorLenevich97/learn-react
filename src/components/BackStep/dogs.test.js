const dogsList = [
  { name: "John", age: 2 },
  { name: "Tim", age: 4 },
  { name: "Bobby", age: 10 },
  { name: "Katt", age: 7 },
];

const filterDogs = (arr, min, max) =>
  arr.filter((item) => item.age >= min && item.age <= max);

it("Dogs filters bt age", () => {
  const filteredDogs = filterDogs(dogsList, 3, 8);

  expect(filteredDogs).toHaveLength(2);
  expect(filteredDogs).toContainEqual({ name: "Tim", age: 4 });
  expect(filteredDogs).toEqual([
    { name: "Tim", age: 4 },
    { name: "Katt", age: 7 },
  ]);
});
