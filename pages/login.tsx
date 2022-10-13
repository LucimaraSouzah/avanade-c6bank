import React, { FormEvent, useState } from "react";
import {
  Typography,
  Container,
  Button,
  Avatar,
  TextField,
  Checkbox,
  Grid,
  Box,
  CssBaseline,
  FormControlLabel,
} from "@mui/material";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type CopyProps = {
  site?: string;
};

function Copyright(props: CopyProps) {
  return (
    <Typography>
      {"Copyright © "}
      <Link color="inherit" href={`https://www.${props.site}.com.br`}>
        {props.site}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function loginPage() {
  const [password, setPassword] = useState<FormDataEntryValue | null>("");
  const [error, setError] = useState<string | boolean>("");
  const [errorMessage, setErrorMessage] = useState<string | boolean>("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setPassword(data.get("password"));
    if (password && password.length < 6) {
      setError(true);
      setErrorMessage("Senha deve ter no mínimo 6 caracteres");
    }
    console.log({
      email: data.get("email"),
      senha: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Tela de Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ m1: 1 }}>
            <TextField
              margin="normal"
              required
              id="email"
              name="email"
              fullWidth
              label="Digite o login"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Digite a senha"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Login
            </Button>
            {error && <Typography color="error">{errorMessage}</Typography>}
          </Box>
        </Box>
        <Copyright site="Avanade" />
      </Container>
    </ThemeProvider>
  );
}
