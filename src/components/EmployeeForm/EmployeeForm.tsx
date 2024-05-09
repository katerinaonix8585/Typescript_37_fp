import { useState } from 'react';
import { useFormik } from 'formik';
import Input from "components/Input/Input";
import { CardFormComponent, Checkbox, CheckboxContainer, CheckboxLabel, EmployeeFormComponent, ErrorAgreementMessage, FormWrapper } from "./styles";
import { EmployeeFormValues, EMPLOYEE_FIELD_NAMES } from './types';
import Button from 'components/Button/Button';
import * as Yup from  'yup';

const validationSchema = Yup.object().shape({
  [EMPLOYEE_FIELD_NAMES.NAME]: Yup.string()
     .required("Required field")
     .min(2, 'Min 2 symbols')
     .max(20, 'Max 50 symbosl'),
  [EMPLOYEE_FIELD_NAMES.SURNAME]: Yup.string()
     .required("Required field")  
     .max(15, 'Max 15 symbols'),
  [EMPLOYEE_FIELD_NAMES.AGE]: Yup.number()
     .typeError('Age must be number')
     .required("Required field")
    //  .max(3, 'Max 3 symbols')
     .test('check length', 'Max 3 symbols', value => String(value).length <=3),
  [EMPLOYEE_FIELD_NAMES.POSITION]: Yup.string(),
  [EMPLOYEE_FIELD_NAMES.AGREEMENT]: Yup.boolean().oneOf([true], 'Accept agreement')
})

function EmployeeForm() {
  const [formValues, setFormValues] = useState<EmployeeFormValues>({
    name: "",
    surname: "",
    age: "",
    position: "",
    agreement: false
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FIELD_NAMES.NAME]: '',
      [EMPLOYEE_FIELD_NAMES.SURNAME]: '',
      [EMPLOYEE_FIELD_NAMES.AGE]: '',
      [EMPLOYEE_FIELD_NAMES.POSITION]: '',
      [EMPLOYEE_FIELD_NAMES.AGREEMENT]: false,
    } as EmployeeFormValues,
    validationSchema, 
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values)
      // console.log(`Form values: ${values.name}, ${values.surname}, ${values.age}, ${values.position}, ${values.agreement}`)
    }
  });

  return (
    <FormWrapper>
      <EmployeeFormComponent onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          placeholder="Enter your name"
          label="Name"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FIELD_NAMES.NAME]}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.NAME]}
        />
        <Input
          name="surname"
          placeholder="Enter your surname"
          label="Surname"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FIELD_NAMES.SURNAME]}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.SURNAME]}
        />
        <Input
          name="age"
          placeholder="Enter your age"
          label="Age"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FIELD_NAMES.AGE]}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.AGE]}
        />
        <Input
          name="position"
          placeholder="Enter your position"
          label="Position"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FIELD_NAMES.POSITION]}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.POSITION]}
        />
        <CheckboxContainer>
          <Checkbox
            id='agreement-id'
            name='agreement'
            type='checkbox'
            onChange={formik.handleChange}
            checked={formik.values[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
          />
          <CheckboxLabel htmlFor='agreement-id'>I Agree</CheckboxLabel>
        </CheckboxContainer>
        <ErrorAgreementMessage>{formik.errors[EMPLOYEE_FIELD_NAMES.AGREEMENT]}</ErrorAgreementMessage>
        {/* <Button type="submit" name="Create" disabled={!formik.values.agreement} /> */}
        <Button type="submit" name="Create"/>
      </EmployeeFormComponent>
      <CardFormComponent>
        <p>name</p>
        <p>surname</p>
        <p>age</p>
        <p>position</p>
      </CardFormComponent>
    </FormWrapper>)

}

export default EmployeeForm;
