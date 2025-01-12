"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError, AxiosResponse } from "axios";

import PublicProvider from "../../providers/PublicProvider";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";

interface ErrorLogin {
  message?: string;
  color?: string;
  status?: string;
}

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [emailValidation, setEmailValidation] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordType, setPasswordType] = useState<string>("password");
  const [passwordValidation, setPasswordValidation] = useState<boolean>(false);
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<ErrorLogin>({});

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setEmailValidation(emailRegex.test(value));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length === 0) {
      setPasswordValidation(false);
      setPasswordMessage("Password Wajib Diisi!");
    } else {
      setPasswordValidation(true);
      setPasswordMessage("");
    }
  };

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginError({
        message: "Email dan Password Wajib Diisi!",
        color: "text-red-500",
        status: "400",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setLoginError({
        message: "Email Tidak Valid!",
        color: "text-red-500",
        status: "400",
      });
      return;
    }

    try {
      const response: AxiosResponse = (await axios.post(
        "https://techtest.folkatech.com/api/login",
        {
          email,
          password,
        }
      )) as any;
      console.log(response);
      if (response.data) {
        setLoginError({
          message: "Login Berhasil!",
          color: "text-lime-500",
          status: "200",
        });
        localStorage.setItem("token", response?.data.data.token);
        localStorage.setItem("userData", JSON.stringify(response?.data.data));
      } else {
        setLoginError({
          message: "Email atau Password Salah!",
          color: "text-red-500",
          status: "404",
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setLoginError({
          message:
            error.response?.data.message ?? "Login Gagal, Terjadi Kesalahan!",
          color: "text-red-500",
          status: "500",
        });
      }
    }
  };
  console.log(email);
  console.log(password);

  return (
    <PublicProvider>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col p-8 gap-5 bg-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/6 rounded-[10px] shadow-lg z-50">
          <form className="space-y-5 font-sans" onSubmit={handleSubmit}>
            <div className="text-[26px] text-[#730C07] font-bold">Masuk</div>
            {loginError.status ? (
              <div className="py-3">
                <p className={`leading-normal ${loginError.color}`}>
                  {loginError.message}
                </p>
              </div>
            ) : null}
            <div className="flex flex-col gap-6">
              <div className="w-full flex items-center">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleEmail}
                  value={email}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className="shadow-lg p-6 rounded-lg w-full"
                />
                <div className="-ml-10">
                  {email === "" ? (
                    ""
                  ) : emailValidation ? (
                    <FaCircleCheck className="text-xl text-lime-500" />
                  ) : (
                    <FaCircleXmark className="text-xl text-red-500" />
                  )}
                </div>
              </div>
              {!emailValidation && isEmailFocused && (
                <p className="text-[#CB3A31] mt-1 text-xs">
                  Email harus diisi dengan sesuai
                </p>
              )}
              <div className="w-full flex items-center">
                <input
                  id="password"
                  type={passwordType}
                  placeholder="Password"
                  onChange={handlePassword}
                  value={password}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className="shadow-lg p-6 rounded-lg w-full"
                />
                <button
                  id="toggle-password"
                  type="button"
                  onClick={togglePassword}
                  className="-ml-10"
                >
                  {passwordType === "password" ? (
                    <FaEye className="text-xl" />
                  ) : (
                    <FaEyeSlash className="text-xl" />
                  )}
                </button>
              </div>
              {!passwordValidation && isPasswordFocused && (
                <p className="text-[#CB3A31] mt-1 text-xs">{passwordMessage}</p>
              )}
            </div>
            <div className="flex justify-end text-[#730C07] text-xs font-semibold cursor-pointer">
              Lupa Password?
            </div>
            <button
              type="submit"
              className="w-full bg-[#EB3F36] rounded-lg py-6 text-white text-lg"
            >
              MASUK
            </button>
          </form>
          <div className="flex justify-center">
            <div className="border w-4/5"></div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>Belum punya akun?</div>
            <div
              className="text-[#730C07] font-semibold cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Daftar Sekarang
            </div>
          </div>
        </div>
      </div>
    </PublicProvider>
  );
}

export default Login;
