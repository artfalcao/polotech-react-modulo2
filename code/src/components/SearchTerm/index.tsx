import { useActivity } from "../../context/activity.context";
import { Input } from '../Input/index'; 

const SearchTerm = () => {
  const { searchTerm, setSearchTerm } = useActivity();

  return (
    <>
      <Input
        placeholder="Faça sua busca"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
};

export default SearchTerm ;