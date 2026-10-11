import { zZadatel } from "@/types/Zadatel";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// const schema = z.object({
//   name: z.string().trim().min(2, "Zadej alespoň 2 znaky").meta({
//     title: "Jméno",
//     order: 1,
//   }),

//   email: z.email("Zadej platný e-mail").meta({
//     title: "E-mail",
//     order: 3,
//   }),

//   role: z.enum(["user", "admin"]).meta({
//     title: "Role",
//   }),

//   datumnarozeni: z.iso.date("Zadej platné datum").meta({
//     title: "Datum narození",
//     order: 2,
//   }),

//   consent: z
//     .boolean()
//     .refine((value) => value, {
//       message: "Musíš souhlasit s podmínkami",
//     })
//     .meta({
//       title: "Souhlasím s podmínkami",
//     }),
// });

const schema = zZadatel;

type Values = z.infer<typeof schema>;

const defaultValues: Values = {} as Values;

const jsonSchema = z.toJSONSchema(schema);
const properties = jsonSchema.properties ?? {};
const names = (Object.keys(schema.shape) as Array<keyof Values>)
  .filter((f) => schema.shape[f].meta()?.order)
  .sort((a, b) => {
    const orderA = schema.shape[a].meta()?.order;
    const orderB = schema.shape[b].meta()?.order;

    return (
      (typeof orderA === "number" ? orderA : Infinity) -
      (typeof orderB === "number" ? orderB : Infinity)
    );
  });

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  function onSubmit(values: Values) {
    console.log("Platná data:", values);
    window.alert(JSON.stringify(values, null, 2));
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Stack
        component="form"
        noValidate
        spacing={3}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h5">Registrace</Typography>

        {names.map((name) => {
          const property = properties[name];

          if (!property || typeof property === "boolean") {
            return null;
          }

          const label = property.title ?? name;
          const options = property.enum;
          const isSelect = Array.isArray(options);
          const isRequired = jsonSchema.required?.includes(name) ?? false;
          const inputId = `field-${name}`;
          const helperId = `${inputId}-helper`;

          return (
            <Controller
              key={name}
              name={name}
              control={control}
              render={({ field, fieldState }) => {
                const errorMessage = fieldState.error?.message;
                const hasError = Boolean(fieldState.error);

                if (property.type === "boolean") {
                  return (
                    <FormControl error={hasError}>
                      <FormControlLabel
                        label={label}
                        control={
                          <Checkbox
                            name={field.name}
                            checked={field.value === true}
                            onBlur={field.onBlur}
                            onChange={(event) =>
                              field.onChange(event.target.checked)
                            }
                            slotProps={{
                              input: {
                                id: inputId,
                                ref: field.ref,
                                "aria-invalid": hasError,
                                "aria-describedby": errorMessage
                                  ? helperId
                                  : undefined,
                              },
                            }}
                          />
                        }
                      />

                      {errorMessage && (
                        <FormHelperText id={helperId}>
                          {errorMessage}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }

                return (
                  <TextField
                    id={inputId}
                    name={field.name}
                    inputRef={field.ref}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    label={label}
                    required={isRequired}
                    select={isSelect}
                    type={
                      property.format === "date"
                        ? "date"
                        : property.format === "email"
                          ? "email"
                          : property.type === "number"
                            ? "number"
                            : "text"
                    }
                    slotProps={{
                      inputLabel: {
                        shrink: property.format === "date" ? true : undefined,
                      },
                    }}
                    error={hasError}
                    helperText={errorMessage}
                    fullWidth
                  >
                    {isSelect &&
                      options.map((option) => (
                        <MenuItem key={String(option)} value={String(option)}>
                          {String(option)}
                        </MenuItem>
                      ))}
                  </TextField>
                );
              }}
            />
          );
        })}

        <Button type="submit" variant="contained">
          Uložit
        </Button>
        <pre>{JSON.stringify(errors, null, 2)}</pre>
        {}
      </Stack>
    </Container>
  );
}
