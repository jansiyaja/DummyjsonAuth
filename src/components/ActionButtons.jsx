import { Pencil, Trash } from "lucide-react";

const ActionButtons = ({ product, onEdit, onDelete }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onEdit(product)}
        className="p-2 bg-pink-100 text-pink-600 rounded-md"
      >
        <Pencil size={16} />
      </button>

      <button onClick={onDelete} className="p-2 bg-red-100 text-red-600 rounded-md">
        <Trash size={16} />
      </button>
    </div>
  );
};

export default ActionButtons;
