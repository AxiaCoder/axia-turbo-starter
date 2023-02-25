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
    <label htmlFor={id}>{label}</label>
    {control && (
      <Controller
        name={name || id}
        control={control}
        rules={{ required }}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              type={type || "text"}
              placeholder={placeholder || ""}
              autoComplete={type === "password" ? "current-password" : "on"}
              max={type === "number" && max ? max : undefined}
              {...field}
            />
            {error && <p className="input-errors">{error.message}</p>}
          </>
        )}
      />
    )}

    {!control && (
      <>
        <input
          name={name || id}
          type={type || "text"}
          placeholder={placeholder || ""}
          autoComplete={type === "password" ? "current-password" : "on"}
          max={type === "number" && max ? max : undefined}
        />
      </>
    )}
    {informations && <p className="informations">{informations}</p>}
  </>
);
