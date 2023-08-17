export async function fetchPeople(
  id: string
): Promise<{ name: string } | undefined> {
  return fetch(`https://swapi.dev/api/people/${id}`).then((res) => res.json());
}
