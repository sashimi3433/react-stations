// @ts-check
export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  return <>
    <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
      {breeds.map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </select>
  </>
}

export default BreedsSelect
