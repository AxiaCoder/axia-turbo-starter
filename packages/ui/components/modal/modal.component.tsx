import React from 'react';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  close: () => void;
}

export const ModalComponent: React.FC<ModalProps> = ({
  title,
  children,
  open,
  close,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" />
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3">
            <h5 className="text-3xl font-bold leading-6 text-gray-900 text-center border-b-4 pb-4 mb-4">
              {title}
            </h5>
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <div>{children}</div>
              <div className="items-center gap-2 mt-3 sm:flex">
                <button
                  type="button"
                  className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                  onClick={() => close()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
