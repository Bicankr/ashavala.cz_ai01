"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, Path, Resolver, useForm } from "react-hook-form"; // 'useForm' MUSÍ být z react-hook-form

import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { z } from "zod";
import DateProvider from "./DateProvider";

// 1. Zpřesníme generické omezení T
interface AutoFormProps<T extends z.ZodObject<any>> {
  schema: T;
  onSubmit: (data: z.output<T>) => void;
  defaultValues?: Partial<z.input<T>>;
  submitText?: string;
}

export function AutoForm<T extends z.ZodObject<any>>({
  schema,
  onSubmit,
  defaultValues,
  submitText = "Odeslat",
}: AutoFormProps<T>) {
  type FormData = z.output<T>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema) as unknown as Resolver<FormData>,
    defaultValues: defaultValues as any,
  });

  const onInvalid = (errors: unknown) => {
    console.error("VALIDACE SELHALA:", errors);
    console.log("AKTUÁLNÍ HODNOTY:", getValues());
  };

  const shape = schema.shape;

  const names = getSortedFormFields(schema);

  return (
    <DateProvider>
      <form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
        onInvalid={onInvalid}
      >
        <Stack spacing={2.5}>
          {names.map(({ name, label, order, type, schema }) => (
            <FormField
              key={name}
              label={label!}
              name={name as Path<z.infer<T>>}
              schema={schema as z.ZodType}
              control={control}
              error={errors[name]?.message as string | undefined}
            />
          ))}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            {submitText}
          </Button>
        </Stack>
      </form>
    </DateProvider>
  );
}

interface FormFieldProps {
  name: string;
  label: string;
  schema: z.ZodType;
  control: any;
  error?: string;
}
function FormField({ name, schema, control, error, label }: FormFieldProps) {
  let unwrappedSchema = schema;

  if (unwrappedSchema instanceof z.ZodISODate) {
    console.log("ISO DATE", unwrappedSchema);
  }
  while (
    unwrappedSchema instanceof z.ZodOptional ||
    unwrappedSchema instanceof z.ZodNullable ||
    unwrappedSchema instanceof z.ZodDefault
  ) {
    unwrappedSchema =
      (unwrappedSchema as any)._def.innerType ||
      (unwrappedSchema as any)._def.schema;
  }

  // 1. Boolean -> Checkbox
  if (unwrappedSchema instanceof z.ZodBoolean) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            <FormControlLabel
              control={<Checkbox {...field} checked={!!field.value} />}
              label={String(label)}
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
          </div>
        )}
      />
    );
  }

  // 2. Number -> TextField (type="number")
  if (unwrappedSchema instanceof z.ZodNumber) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            {...field}
            type="number"
            label={label}
            error={!!error}
            helperText={error}
            onChange={(e) =>
              field.onChange(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
            fullWidth
          />
        )}
      />
    );
  }

  // 3. String -> TextField (text / email / password podle popisu nebo názvu)
  if (unwrappedSchema instanceof z.ZodEmail) {
    let type = "email";

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            {...field}
            value={field.value ?? ""}
            type={type}
            label={label}
            error={!!error}
            helperText={error}
            fullWidth
          />
        )}
      />
    );
  }

  // String field (s detekcí emailu, hesla apod.)
  if (unwrappedSchema instanceof z.ZodString) {
    let inputType = "text";

    // Detekce emailu ze Zod v4 validátorů (checks)
    const checks = (unwrappedSchema as any)._def.checks || [];
    const isEmail = checks.some((check: any) => check.kind === "email");

    if (isEmail || name.toLowerCase().includes("email")) {
      inputType = "email";
    } else if (name.toLowerCase().includes("password")) {
      inputType = "password";
    }

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            {...field}
            value={field.value ?? ""}
            type={inputType}
            label={label}
            error={!!error}
            helperText={error}
            fullWidth
            slotProps={{
              htmlInput: {
                // Přidání automatické nápovědy pro prohlížeč při emailu
                autoComplete: inputType === "email" ? "email" : undefined,
              },
            }}
          />
        )}
      />
    );
  }
  //Datum
  if (unwrappedSchema instanceof z.ZodISODate) {
    return (
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value, ...fieldProps },
          fieldState: { error },
        }) => (
          <DateField
            {...fieldProps}
            label={label}
            // KROK A: MUI DateField potřebuje objekt Dayjs. Pokud je hodnota prázdná, předáme null.
            value={value ? dayjs(value) : null}
            // KROK B: Při změně převedeme Dayjs objekt zpět na ISO string (YYYY-MM-DD) pro Zod schéma
            onChange={(newValue) => {
              if (newValue && dayjs(newValue).isValid()) {
                onChange(dayjs(newValue).format("YYYY-MM-DD"));
              } else {
                onChange(""); // Pokud uživatel hodnotu smaže
              }
            }}
            // Mapování chybových stavů do MUI
            slotProps={{
              textField: {
                error: !!error,
                helperText: error?.message,
                fullWidth: true,
              },
            }}
          />
        )}
      />
    );
  }
  return (
    <Typography color="error" variant="caption">
      Unsupported field type for: {name}
    </Typography>
  );
}

export interface FieldMetadata {
  name: string;
  order: number;
  label?: string;
  type?: string;
  schema: z.ZodObject;
  meta?: z.ZodObject;
}

export function getSortedFormFields(schema: z.ZodObject<any>): FieldMetadata[] {
  const shape = schema.shape;

  const fields: FieldMetadata[] = Object.keys(shape).map((key) => {
    const fieldSchema = shape[key];

    // Načtení metadat (zod3.23+ podporuje .description nebo .meta)
    const meta = fieldSchema.meta() || {};

    return {
      name: key,
      order: meta.order ?? undefined, // default na konec, pokud order chybí
      label: meta.label || key,
      type: meta.type || "text",
      schema: fieldSchema,
      meta: meta,
    };
  });

  // Seřazení podle meta.order
  return fields
    .filter((field) => field.order > 0)
    .sort((a, b) => a.order - b.order);
}
