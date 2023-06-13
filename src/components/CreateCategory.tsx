import { useEffect, useState } from "react";
import { createCategory, getCategories } from "../services/axios";
import { Button, Input } from "antd";

import { Category } from "../types/global";

const CreateCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);
  const addCategoryHandler = async () => {
    await createCategory(newCategory);
    setNewCategory("");
    getCategories().then((res) => setCategories(res.data));
  };

  return (
    <div className="m-8 flex flex-col gap-5">
      <h1 className="font-bold text-3xl">Current Categories</h1>
      <div className="flex flex-wrap gap-5">
        {categories.length > 0 &&
          categories.map(({ category, id }) => (
            <h3 key={id} className="border border-blue-900 p-3 rounded-lg">
              {category}
            </h3>
          ))}
      </div>
      <h3 className="text-xl">Add new category</h3>
      <Input
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button className="w-36 text-lg font-bold" onClick={addCategoryHandler}>
        Submit
      </Button>
    </div>
  );
};

export default CreateCategory;
