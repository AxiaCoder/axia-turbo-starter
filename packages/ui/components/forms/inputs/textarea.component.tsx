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
    <label htmlFor={id}>{label}</label>
    {control && (
      <Controller
        name={name || id}
        control={control}
        rules={{ required }}
        render={({ field, fieldState: { error } }) => (
          <>
            <textarea className="" placeholder={placeholder || ""} {...field} />
            {error && <p className="input-errors">{error.message}</p>}
          </>
        )}
      />
    )}

    {!control && (
      <>
        <textarea name={name || id} placeholder={placeholder || ""} />
      </>
    )}
    {informations && <p className="informations">{informations}</p>}
  </>
);
