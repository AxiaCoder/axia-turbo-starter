import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from "react-select";
import { Controller } from "react-hook-form";

interface ISelectInputProps {
  id: string;
  label: string;
  opts: { value: string; label: string }[];
  name?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  max?: number;
  control?: any;
  informations?: string;
}

export const SelectField: React.FC<ISelectInputProps> = ({
  id,
  label,
  name,
  required,
  control,
  opts,
  informations,
}: ISelectInputProps) => (
  <>
    <label htmlFor={id}>{label}</label>
    {control && (
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
            {error && <p className="input-errors">{error.message}</p>}
          </>
        )}
      />
    )}
    {!control && (
      <>
        <Select
          name={name || id}
          className="react-select-container"
          classNamePrefix="react-select"
          options={opts}
        />
      </>
    )}
    {informations && <p className="informations">{informations}</p>}
  </>
);
