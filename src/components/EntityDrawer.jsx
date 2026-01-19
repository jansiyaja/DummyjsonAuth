const EntityDrawer = ({ open, title, onClose, onSubmit, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="w-full max-w-md h-full bg-white shadow-xl animate-slide-in">
       
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold text-rose-600">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 p-5 overflow-y-auto h-[calc(100%-64px)]"
        >
          {children}

       
        </form>
      </div>
    </div>
  );
};

export default EntityDrawer;
