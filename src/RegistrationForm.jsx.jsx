import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "+375 (",
    },
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  const password = watch("password");

  const [submittedData, setSubmittedData] = useState(null);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Имя"
          {...register("name", { required: "Укажите имя" })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <div>
          Выберите пол
          <label>
            <input
              type="radio"
              {...register("gender", { required: "Выберите пол" })}
              value="male"
            />
            Мужской
          </label>
          <label>
            <input
              type="radio"
              {...register("gender", { required: "Выберите пол" })}
              value="female"
            />
            Женский
          </label>
        </div>
        {errors.gender && <p>{errors.gender.message}</p>}

        <input
          type="date"
          {...register("birthDate", { required: "Укажите дату" })}
        />
        {errors.birthDate && <p>{errors.birthDate.message}</p>}

        <input
          placeholder="Номер телефона"
          {...register("phoneNumber", {
            required: "Укажите номер телефона",
            pattern: {
              value: /^\+375 \(\d{2}\) \d{7}$/,
              message: "Формат: +375 (29) 1234567",
            },
          })}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

        <input
          placeholder="Введите почту"
          {...register("email", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Введите корректный email",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          placeholder="Пароль"
          {...register("password", {
            required: "Укажите пароль",
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
            pattern: {
              value: /[A-ZА-Я]/,
              message: "Пароль должен содержать минимум одну заглавную букву",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          placeholder="Подтвердите пароль"
          {...register("confirmPassword", {
            required: "Подтвердите пароль",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Отправить</button>
      </form>

      {submittedData && (
        <div>
          <h3>Успешно зарегистрировано!</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          <button onClick={() => setSubmittedData(null)}>Закрыть</button>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
