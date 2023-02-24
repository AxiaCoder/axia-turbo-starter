import React from "react";
import { Controller } from "react-hook-form";

interface ITextInputProps {
  id: string;
  label: string;
  name?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  max?: number;
  control: any;
  informations?: string;
}

export const TextInput: React.FC<ITextInputProps> = ({
  id,
  label,
  name,
  type,
  required,
  placeholder,
  control,
  max,
  informations,
}: ITextInputProps) => (
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
            <input
              type={type || "text"}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={placeholder || ""}
              autoComplete={type === "password" ? "current-password" : "on"}
              max={type === "number" && max ? max : undefined}
              {...field}
            />
            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </>
        )}
      />
    )}

    {!control && (
      <>
        <input
          name={name || id}
          type={type || "text"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder || ""}
          autoComplete={type === "password" ? "current-password" : "on"}
          max={type === "number" && max ? max : undefined}
        />
      </>
    )}
    {informations && (
      <p className="text-sm text-gray-500 dark:text-gray-400">{informations}</p>
    )}
  </>
);
