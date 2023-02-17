import React from 'react';

interface ISubmitButtonProps {
  label: string;
}

export const FormSubmit: React.FC<ISubmitButtonProps> = ({
  label,
}: ISubmitButtonProps) => (
  <button
    type="submit"
    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  >
    {label}
  </button>
);
