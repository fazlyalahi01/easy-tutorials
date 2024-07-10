import { SignupForm } from "../_components/signup-form";

const RegisterPage = ({ params : { accountType }}) => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm accountType={accountType}/>
      </div>
    </div>
  );
};
export default RegisterPage;
