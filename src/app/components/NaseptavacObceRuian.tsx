"use client";

import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {
  AddressSuggestion,
  getAddressDetail,
  suggestAddresses,
  TAddressDetail,
} from "./adress";

type TProps = { callBack: (data: TAddressDetail) => void };
export default function NaseptavacObceRuian(props: TProps) {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState<AddressSuggestion | null>(null);
  const [options, setOptions] = useState<AddressSuggestion[]>([]);
  const [detail, setDetail] = useState<TAddressDetail | null>(null);

  const [suggestLoading, setSuggestLoading] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [suggestError, setSuggestError] = useState("");
  const [detailError, setDetailError] = useState("");

  // Našeptávání s prodlevou 300 ms.
  useEffect(() => {
    let active = true;

    setOptions([]);
    setSuggestError("");
    setSuggestLoading(false);

    if (input.trim().length < 3 || selected) return;

    const timer = setTimeout(async () => {
      setSuggestLoading(true);

      try {
        const results = await suggestAddresses(input);
        if (active) setOptions(results);
      } catch {
        if (active) setSuggestError("Adresy se nepodařilo načíst.");
      } finally {
        if (active) setSuggestLoading(false);
      }
    }, 300);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [input, selected]);

  // Detail načteme až po výběru adresy.
  useEffect(() => {
    let active = true;

    setDetail(null);
    setDetailError("");
    setDetailLoading(false);

    if (!selected) return;

    setDetailLoading(true);

    getAddressDetail(selected.magicKey)
      .then((result) => {
        if (active) setDetail(result);
        props.callBack(result);
      })
      .catch(() => {
        if (active) setDetailError("Detail adresy se nepodařilo načíst.");
      })
      .finally(() => {
        if (active) setDetailLoading(false);
      });

    return () => {
      active = false;
    };
  }, [selected]);

  // Při změně výběru nezobrazujeme detail předchozí adresy.
  const address = selected && !detailLoading ? detail : null;
  const loading = suggestLoading || detailLoading;
  const error = suggestError || detailError;

  function clearDetail() {
    setDetail(null);
    setDetailError("");
  }

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        maxWidth: 640,
        backgroundColor: "rgb(0, 0, 100 , 10%)",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Autocomplete<AddressSuggestion>
        fullWidth
        value={selected}
        inputValue={input}
        options={options}
        loading={loading}
        loadingText="Načítám…"
        noOptionsText={
          input.trim().length < 3
            ? "Zadejte alespoň 3 znaky"
            : error || "Žádná adresa nenalezena"
        }
        filterOptions={(items) => items}
        getOptionLabel={(option) => option.text}
        getOptionKey={(option) => option.magicKey}
        isOptionEqualToValue={(option, value) =>
          option.magicKey === value.magicKey
        }
        onInputChange={(_, text, reason) => {
          if (reason !== "input" && reason !== "clear") return;
          setInput(text);
          setSelected(null);
          setOptions([]);
          clearDetail();
        }}
        onChange={(_, value) => {
          setSelected(value);
          setInput(value?.text ?? "");
          setOptions([]);
          clearDetail();
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Vyhledat adresu"
            error={Boolean(error)}
            helperText={
              error || (detailLoading ? "Načítám detail adresy…" : "")
            }
            slotProps={{
              ...params.slotProps,
              input: {
                ...params.slotProps.input,
                endAdornment: (
                  <>
                    {loading && (
                      <CircularProgress
                        color="inherit"
                        size={20}
                        aria-label="Načítání adresy"
                      />
                    )}
                    {params.slotProps.input.endAdornment}
                  </>
                ),
              },
            }}
          />
        )}
      />

      <input
        type="hidden"
        name="kodAdresnihoMista"
        value={address?.kodAdresnihoMista ?? ""}
      />
      <input type="hidden" name="kodObce" value={address?.kodObce ?? ""} />
    </Box>
  );
}
