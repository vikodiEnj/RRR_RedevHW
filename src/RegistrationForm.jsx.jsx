import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      gender: "",
    },
    mode: "onTouched",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  const password = watch("password");

  return (
    <Box
      sx={{
        maxWidth: 420,
        mx: "auto",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <TextField
          label="Имя"
          {...register("name", { required: "Укажите имя" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Электронная почта"
          {...register("email", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Введите корректный email",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Пароль"
          type="password"
          {...register("password", {
            required: "Укажите пароль",
            minLength: { value: 6, message: "Минимум 6 символов" },
            pattern: {
              value: /[A-ZА-Я]/,
              message: "Пароль должен содержать минимум одну заглавную букву",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          label="Подтвердите пароль"
          type="password"
          {...register("confirmPassword", {
            required: "Подтвердите пароль",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        <TextField
          label="Дата рождения"
          type="date"
          slotProps={{ inputLabel: { shrink: true } }}
          {...register("birthDate", { required: "Укажите дату" })}
          error={!!errors.birthDate}
          helperText={errors.birthDate?.message}
        />

        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            required: "Укажите номер телефона",
            pattern: {
              value: /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
              message: "Введите номер полностью",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Номер телефона"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
              slotProps={{
                input: {
                  inputComponent: IMaskInput,
                  inputProps: {
                    mask: "+375 (00) 000-00-00",
                  },
                },
              }}
            />
          )}
        />

        <Controller
          name="gender"
          control={control}
          rules={{ required: "Выберите пол" }}
          render={({ field }) => (
            <FormControl error={!!errors.gender}>
              <FormLabel>Пол</FormLabel>
              <RadioGroup row {...field}>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Мужской"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Женский"
                />
              </RadioGroup>
              <FormHelperText>{errors.gender?.message}</FormHelperText>
            </FormControl>
          )}
        />

        <Button type="submit" variant="contained">
          Зарегистрироваться
        </Button>
      </form>

      <Dialog open={!!submittedData} onClose={() => setSubmittedData(null)}>
        <DialogTitle>Успешно зарегистрировано!</DialogTitle>
        <DialogContent>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </DialogContent>
        <DialogActions>
          {" "}
          <Button onClick={() => setSubmittedData(null)}>Закрыть</Button>{" "}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RegistrationForm;
