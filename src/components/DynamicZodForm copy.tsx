// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Button,
//   Checkbox,
//   Container,
//   FormControl,
//   FormControlLabel,
//   FormHelperText,
//   MenuItem,
//   Stack,
//   TextField,
// } from "@mui/material";
// import { Controller, useForm } from "react-hook-form";

// import { z } from "zod";

// interface TProps<T extends z.ZodObject<any>> {
//   schema: T;
//   initialValues?: z.infer<T>;
//   onSubmit: (values: z.infer<T>) => void;
// }
// export function MyComponent<T extends z.ZodObject<any>>({
//   schema,
//   initialValues,
// }: TProps<T>) {
//   const defaultValues = initialValues ?? {};
//   const jsonSchema = z.toJSONSchema(schema);
//   const properties = jsonSchema.properties ?? {};
//   const names = (Object.keys(schema.shape) as Array<keyof T>)
//     .filter((f) => schema.shape[f].meta()?.order)
//     .sort((a, b) => {
//       const orderA = schema.shape[a].meta()?.order;
//       const orderB = schema.shape[b].meta()?.order;

//       return (
//         (typeof orderA === "number" ? orderA : Infinity) -
//         (typeof orderB === "number" ? orderB : Infinity)
//       );
//     });
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<T>({
//     resolver: zodResolver(schema),
//     initialValues: defaultValues,
//     mode: "onBlur",
//     reValidateMode: "onChange",
//   });

//   function onSubmit(values: T) {
//     console.log("Platná data:", values);
//     window.alert(JSON.stringify(values, null, 2));
//   }

//   return (
//     <Container maxWidth="sm" sx={{ py: 4 }}>
//       <Stack
//         component="form"
//         noValidate
//         spacing={3}
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         {names.map((name) => {
//           const property = properties[name];
//           if (!property || typeof property === "boolean") {
//             return null;
//           }
//           const label = property.title ?? name;
//           const options = property.enum;
//           const isSelect = Array.isArray(options);
//           const isRequired = jsonSchema.required?.includes(name) ?? false;
//           const inputId = `field-${name}`;
//           const helperId = `${inputId}-helper`;

//           return (
//             <Controller
//               key={name}
//               name={name}
//               control={control}
//               render={({ field, fieldState }) => {
//                 const errorMessage = fieldState.error?.message;
//                 const hasError = Boolean(fieldState.error);

//                 if (property.type === "boolean") {
//                   return (
//                     <FormControl error={hasError}>
//                       <FormControlLabel
//                         label={label}
//                         control={
//                           <Checkbox
//                             name={field.name}
//                             checked={field.value === true}
//                             onBlur={field.onBlur}
//                             onChange={(event) =>
//                               field.onChange(event.target.checked)
//                             }
//                             slotProps={{
//                               input: {
//                                 id: inputId,
//                                 ref: field.ref,
//                                 "aria-invalid": hasError,
//                                 "aria-describedby": errorMessage
//                                   ? helperId
//                                   : undefined,
//                               },
//                             }}
//                           />
//                         }
//                       />

//                       {errorMessage && (
//                         <FormHelperText id={helperId}>
//                           {errorMessage}
//                         </FormHelperText>
//                       )}
//                     </FormControl>
//                   );
//                 }

//                 return (
//                   <TextField
//                     sx={{
//                       "& input:-webkit-autofill": {
//                         // Vynutí zachování transparentního pozadí i při autofillu
//                         WebkitBoxShadow:
//                           "0 0 0 1000px transparent inset !important",
//                         WebkitTextFillColor: "inherit !important",
//                         transition: "background-color 5000s ease-in-out 0s",
//                       },
//                     }}
//                     size="small"
//                     id={inputId}
//                     name={field.name}
//                     inputRef={field.ref}
//                     value={field.value ?? ""}
//                     onChange={field.onChange}
//                     onBlur={field.onBlur}
//                     label={label}
//                     required={isRequired}
//                     select={isSelect}
//                     type={
//                       property.format === "date"
//                         ? "date"
//                         : property.format === "email"
//                           ? "email"
//                           : property.type === "number"
//                             ? "number"
//                             : "text"
//                     }
//                     slotProps={{
//                       inputLabel: {
//                         shrink: property.format === "date" ? true : undefined,
//                       },
//                     }}
//                     error={hasError}
//                     helperText={errorMessage}
//                     fullWidth
//                   >
//                     {isSelect &&
//                       options.map((option) => (
//                         <MenuItem key={String(option)} value={String(option)}>
//                           {String(option)}
//                         </MenuItem>
//                       ))}
//                   </TextField>
//                 );
//               }}
//             />
//           );
//         })}

//         <Button type="submit" variant="contained">
//           Uložit
//         </Button>
//         <pre>{JSON.stringify(errors, null, 2)}</pre>
//         {}
//       </Stack>
//     </Container>
//   );
// }
