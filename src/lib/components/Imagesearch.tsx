import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ImagesearchProps {
  searchText: (text: string) => void;
}

const Imagesearch: React.FC<ImagesearchProps> = ({ searchText }) => {
  const [text, setText] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchText(text);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden mt-12 mb-5 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center p-2">
          <Input
            onChange={onChange}
            value={text}
            type="text"
            placeholder="Search Image Term..."
          />
          <Button type="submit" className="mx-3">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Imagesearch;
