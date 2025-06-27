import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="subtle"
          borderRadius={20}
          flex="1"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
