"use client"

import SignIn from "@/components/sign-in/SignIn";
import SignUp from "@/components/sign-up/SignUp";
import { onSubmitFunc, onSubmitSignUpFunc, SignUpData } from "@/types/types";

export default function Home() {

  const onSubmit: onSubmitFunc = (data: {
    email: string;
    password: string;
  }) => {
    alert(JSON.stringify(data, null, 2));
  };

  const onSubmitSignUp: onSubmitSignUpFunc = (data: SignUpData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <SignIn onSubmit={onSubmit} />
      <SignUp onSubmit={onSubmitSignUp} />
    </>
  );
}
