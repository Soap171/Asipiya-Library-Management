import { useState } from "react";
import UsersTable from "./UsersTable";
import AddUserModal from "./AddUserModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function UsersTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <UsersTable />

      <Button
        onClick={handleAddUser}
        variant="default"
        size="lg"
        className="fixed bottom-10 right-10"
      >
        <Plus className="w-5 h-5" /> {/* Plus Icon */}
        <span>Add User</span>
      </Button>

      {isModalOpen && <AddUserModal onClose={handleCloseModal} />}
    </div>
  );
}

export default UsersTab;