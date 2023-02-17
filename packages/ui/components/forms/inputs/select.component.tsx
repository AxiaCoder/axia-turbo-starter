import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
import { Controller } from 'react-hook-form';

interface ITextInputProps {
  id: string;
  label: string;
  opts: { value: string; label: string }[];
  name?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  max?: number;
  control: any;
  informations?: string;
}

export const SelectField: React.FC<ITextInputProps> = ({
  id,
  label,
  name,
  required,
  control,
  opts,
  informations,
}: ITextInputProps) => (
  <>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <Controller
      name={name || id}
      control={control}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <>
          <Select
            {...field}
            className="react-select-container"
            classNamePrefix="react-select"
            options={opts}
          />
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </>
      )}
    />
    {informations && (
      <p className="text-sm text-gray-500 dark:text-gray-400">{informations}</p>
    )}
  </>
);
