import React from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {useForm, Controller, FieldErrors} from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
  password_repeat: string;
  lastname: string;
  firstname: string;
};

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      password_repeat: '',
      lastname: '',
      firstname: '',
    },
  });
  const onSubmit = (data: FormData) => console.log(data);

  const renderInput = (name: keyof FormData, rules: object, additionalStyles?: object) => (
    <View>
      <Text>{name}</Text>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[styles.input, additionalStyles]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {errors[name] && <Text style={styles.errorText}>This is required.</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderInput('Електронна пошта', {required: true})}
      {renderInput('Пароль', {maxLength: 100})}
      {renderInput('Пароль (ще раз)', {maxLength: 100})}
      {renderInput('Прізвище', {maxLength: 100}, styles.additionalInput)}
      {renderInput('Імя', {maxLength: 100}, styles.additionalInput)}

      <Button title="Зареєструватися" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  additionalInput: {
    marginTop: 5,
  },
  errorText: {
    color: 'red',
  },
});

export default RegistrationForm;