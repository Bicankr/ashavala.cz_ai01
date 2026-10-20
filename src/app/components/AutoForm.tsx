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

import { z } from "zod";

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
  // Odvodíme přesný typ formulářových dat
  type FormData = z.output<T>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // Pretvarování zodResolveru vyřeší typový konflikt v @hookform/resolvers
    resolver: zodResolver(schema) as unknown as Resolver<FormData>,
    defaultValues: defaultValues as any,
  });

  const shape = schema.shape;

  const names = getSortedFormFields(schema);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {submitText}
        </Button>
      </Stack>
    </form>
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
  // Rozbalení ZodOptional, ZodNullable nebo ZodDefault pro zjištění podkladového typu
  let unwrappedSchema = schema;
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
