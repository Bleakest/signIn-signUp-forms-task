import React, { ChangeEventHandler } from "react";

export interface FormInputData {
  name: string;
  type: string;
  value: string | number;
  onChange: ChangeEventHandler;
  placeholder: string;
  icon?: React.ReactNode;
}

export type onSubmitFunc = (data: { email: string; password: string }) => void;

export type SignUpData = {
  name: string;
  username: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
};

export type onSubmitSignUpFunc = (data: SignUpData) => void;
