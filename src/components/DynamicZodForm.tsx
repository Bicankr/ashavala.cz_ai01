import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { useState, type FormEvent } from "react";
import { z } from "zod";

type FieldOptions = {
  label?: string;
  placeholder?: string;
  helperText?: string;
  type?: "text" | "email" | "password";
  multiline?: boolean;
};

type DynamicFormProps<S extends z.ZodObject> = {
  schema: S;
  initialValues?: Partial<z.input<S>>;
  fields?: Partial<Record<keyof z.input<S>, FieldOptions>>;
  onSubmit: (data: z.output<S>) => void;
  submitLabel?: string;
};

function unwrap(schema: z.core.$ZodType): z.core.$ZodType {
  if (schema instanceof z.ZodOptional || schema instanceof z.ZodDefault) {
    return unwrap(schema.unwrap());
  }

  return schema;
}
export default function DynamicForm<S extends z.ZodObject>({
  schema,
  initialValues,
  fields,
  onSubmit,
  submitLabel = "Uložit",
}: DynamicFormProps<S>) {
  const [values, setValues] = useState<Record<string, unknown>>(() => ({
    ...initialValues,
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  function setValue(name: string, value: unknown) {
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
    setFormError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = schema.safeParse(values);

    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      const rootErrors: string[] = [];

      for (const issue of result.error.issues) {
        const name = issue.path[0];

        if (name === undefined) {
          rootErrors.push(issue.message);
        } else {
          nextErrors[String(name)] ??= issue.message;
        }
      }

      setErrors(nextErrors);
      setFormError(rootErrors.join(" "));
      return;
    }

    setErrors({});
    setFormError("");
    onSubmit(result.data);
  }

  return (
    <Stack component="form" noValidate spacing={2} onSubmit={handleSubmit}>
      {Object.entries(schema.shape).map(([name, definition]) => {
        const field = unwrap(definition);
        const options = fields?.[name as keyof z.input<S>];
        const label = options?.label ?? name;
        const helperText = errors[name] || options?.helperText;

        if (field instanceof z.ZodBoolean) {
          return (
            <FormControl key={name} error={Boolean(errors[name])}>
              <FormControlLabel
                label={label}
                control={
                  <Checkbox
                    checked={
                      typeof values[name] === "boolean"
                        ? values[name]
                        : definition.safeParse(undefined).data === true
                    }
                    onChange={(_, checked) => setValue(name, checked)}
                  />
                }
              />
              {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
          );
        }

        const isEnum = field instanceof z.ZodEnum;
        const isNumber = field instanceof z.ZodNumber;
        const isString = field instanceof z.ZodString;

        if (!isEnum && !isNumber && !isString) {
          return (
            <Alert key={name} severity="warning">
              Pole „{label}“ nemá podporovaný typ.
            </Alert>
          );
        }

        const defaultValue = definition.safeParse(undefined);
        const value =
          values[name] ??
          (defaultValue.success ? defaultValue.data : undefined) ??
          "";

        return (
          <TextField
            key={name}
            fullWidth
            name={name}
            label={label}
            value={value}
            select={isEnum}
            type={isNumber ? "number" : (options?.type ?? "text")}
            multiline={isString && options?.multiline}
            placeholder={options?.placeholder}
            error={Boolean(errors[name])}
            helperText={helperText}
            onChange={(event) => {
              const raw = event.target.value;

              setValue(
                name,
                raw === "" ? undefined : isNumber ? Number(raw) : raw,
              );
            }}
          >
            {isEnum &&
              field.options.map((option) => (
                <MenuItem key={String(option)} value={option}>
                  {String(option)}
                </MenuItem>
              ))}
          </TextField>
        );
      })}

      {formError && <Alert severity="error">{formError}</Alert>}

      <Button type="submit" variant="contained">
        {submitLabel}
      </Button>
    </Stack>
  );
}
