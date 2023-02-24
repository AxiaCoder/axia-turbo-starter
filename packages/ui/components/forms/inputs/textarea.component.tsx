import React from "react";
import { Controller } from "react-hook-form";

interface ITextAreaProps {
  id: string;
  label: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  control: any;
  informations?: string;
}

export const TextArea: React.FC<ITextAreaProps> = ({
  id,
  label,
  name,
  required,
  placeholder,
  control,
  informations,
}: ITextAreaProps) => (
  <>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    {control && (
      <Controller
        name={name || id}
        control={control}
        rules={{ required }}
        render={({ field, fieldState: { error } }) => (
          <>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={placeholder || ""}
              {...field}
            />
            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </>
        )}
      />
    )}

    {!control && (
      <>
        <textarea
          name={name || id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder || ""}
        />
      </>
    )}
    {informations && (
      <p className="text-sm text-gray-500 dark:text-gray-400">{informations}</p>
    )}
  </>
);
