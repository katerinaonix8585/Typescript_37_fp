import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { InputsContainerWrapper, LoginformParagraph, LoginformWrapper } from "./styles";

function LoginForm() {
  return (
    <LoginformWrapper className="loginform-wrapper">
      <LoginformParagraph className="loginform-name">Login form</LoginformParagraph>
      <InputsContainerWrapper>
        <Input
          name="login-email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          
        />
        <Input
          name="login-password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          
        />
      </InputsContainerWrapper>
      <Button type="submit" name="Login" onButtonClick={()=>{}} />
    </LoginformWrapper>
  );
}

export default LoginForm;
