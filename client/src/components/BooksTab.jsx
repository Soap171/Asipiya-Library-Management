import { useState } from "react";
import BooksTable from "./BooksTable";
import AddBookModal from "./AddBookModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function BooksTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBook = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Library Books</h1>
      <BooksTable />

      <Button
        onClick={handleAddBook}
        variant="default"
        size="lg"
        className="fixed bottom-10 right-10"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add Book
      </Button>

      <AddBookModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default BooksTab;