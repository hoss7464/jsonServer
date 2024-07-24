import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, submitForm } from "../../Redux/actions/simpleFormSlice";
import {
  RegisterContainer,
  RegisterWrapper,
  RegisterFormWrapper,
  RegisterForm,
  SignupHeaderWrapper,
  SignupHeader,
  RegisterInputLabelWrapper,
  RegisterLabelWrapper,
  RegisterInputLabel,
  RegisterInputIconWrapper,
  RegisterInputWrapper,
  RegisterInput,
  RegisterIconWrapper,
  RegisterIcon,
  RegisterSubmitBtnWrapper,
  RegisterSubmitButton,
  RegisterQuestionWrapper,
  RegiterLink,
  RegisterErrorWrapper,
  RegisterError,
} from "./RegisterElements";
import personIcon from "../../Assets/Svg/personIcon.svg";
import mailIcon from "../../Assets/Svg/mailIcon.svg";
import passIcon from "../../Assets/Svg/passIcon.svg";
import confPassIcon from "../../Assets/Svg/confPassIcon.svg";
import authorizationIcon from "../../Assets/Svg/userIcon.svg";
import phoneIcon from "../../Assets/Svg/phoneIcon.svg";
import { RegisterText } from "../../Helper/Register";

const Register = () => {
  const { forms, errors } = useSelector((state) => state.simpleForm);
  const dispatch = useDispatch();

  //-------------------------------------------------------------------------------
  //Functions form forms :
  const handleChange = (formId, e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ formId, field: name, value }));
  };

  const handleSubmit = (formId, e) => {
    e.preventDefault();
    dispatch(submitForm({ formId, formData: forms[formId] }));
  };
  //-------------------------------------------------------------------------------
  return (
    <>
      <RegisterContainer>
        <RegisterWrapper>
          <RegisterFormWrapper>
            <RegisterForm onSubmit={(e) => handleSubmit("signupForm", e)}>
              <SignupHeaderWrapper>
                <SignupHeader>{RegisterText.text1}</SignupHeader>
              </SignupHeaderWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>{RegisterText.text2}</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon alt={RegisterText.text3} src={personIcon} />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <RegisterInput
                      placeholder={RegisterText.text17}
                      type="text"
                      name="fullname"
                      value={forms["signupForm"].fullname || ""}
                      onChange={(e) => handleChange("signupForm", e)}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {errors.signupForm.fullname && (
                  <RegisterErrorWrapper>
                    <RegisterError>{errors.signupForm.fullname}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>{RegisterText.text4}</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon alt={RegisterText.text5} src={mailIcon} />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <RegisterInput
                      placeholder={RegisterText.text18}
                      type="email"
                      name="email"
                      value={forms["signupForm"].email || ""}
                      onChange={(e) => handleChange("signupForm", e)}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {errors.signupForm.email && (
                  <RegisterErrorWrapper>
                    <RegisterError>{errors.signupForm.email}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>{RegisterText.text6}</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon alt={RegisterText.text7} src={phoneIcon} />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <RegisterInput
                      placeholder={RegisterText.text19}
                      type="tel"
                      name="phoneNumber"
                      value={forms["signupForm"].phoneNumber || ""}
                      onChange={(e) => handleChange("signupForm", e)}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {errors.signupForm.phoneNumber && (
                  <RegisterErrorWrapper>
                    <RegisterError>{errors.signupForm.phoneNumber}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>{RegisterText.text8}</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon alt={RegisterText.text9} src={passIcon} />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <RegisterInput
                      placeholder={RegisterText.text20}
                      type="password"
                      name="password"
                      value={forms["signupForm"].password || ""}
                      onChange={(e) => handleChange("signupForm", e)}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {errors.signupForm.password && (
                  <RegisterErrorWrapper>
                    <RegisterError>{errors.signupForm.password}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>{RegisterText.text10}</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon
                      alt={RegisterText.text11}
                      src={confPassIcon}
                    />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <RegisterInput
                      placeholder={RegisterText.text21}
                      type="password"
                      name="confirmPassword"
                      value={forms["signupForm"].confirmPassword || ""}
                      onChange={(e) => handleChange("signupForm", e)}
                    />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
                {errors.signupForm.confirmPassword && (
                  <RegisterErrorWrapper>
                    <RegisterError>{errors.signupForm.confirmPassword}</RegisterError>
                  </RegisterErrorWrapper>
                )}
              </RegisterInputLabelWrapper>

              <RegisterInputLabelWrapper>
                <RegisterLabelWrapper>
                  <RegisterInputLabel>{RegisterText.text12}</RegisterInputLabel>
                </RegisterLabelWrapper>
                <RegisterInputIconWrapper>
                  <RegisterIconWrapper>
                    <RegisterIcon
                      alt={RegisterText.text13}
                      src={authorizationIcon}
                    />
                  </RegisterIconWrapper>
                  <RegisterInputWrapper>
                    <RegisterInput placeholder={RegisterText.text22} />
                  </RegisterInputWrapper>
                </RegisterInputIconWrapper>
              </RegisterInputLabelWrapper>

              <RegisterSubmitBtnWrapper>
                <RegisterSubmitButton type="submit">
                  {RegisterText.text14}
                </RegisterSubmitButton>
              </RegisterSubmitBtnWrapper>
              <RegisterQuestionWrapper>
                {RegisterText.text15}
                <RegiterLink to="/login">{RegisterText.text16}</RegiterLink>
              </RegisterQuestionWrapper>
            </RegisterForm>
          </RegisterFormWrapper>
        </RegisterWrapper>
      </RegisterContainer>
    </>
  );
};

export default Register;
