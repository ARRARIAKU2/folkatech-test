"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError, AxiosResponse } from "axios";

import { FaArrowLeft } from "react-icons/fa6";

function Register() {
  const router = useRouter();
  const [tab, setTab] = useState<string>("first");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleStep = () => {
    setTab((prevType) => (prevType === "first" ? "second" : "first"));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
    if (e.target.value !== password) {
      setError("Password Tidak Sama");
    } else {
      setError("Password Sama");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse = (await axios.post(
        "https://techtest.folkatech.com/api/register",
        {
          name: `${firstName} ${lastName}`,
          email,
          password,
          phone,
        }
      )) as any;
      if (response.data.code === 200) {
        router.push("/login");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col p-8 gap-5 bg-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/6 rounded-[10px] shadow-lg z-50">
        <form className="space-y-5 font-sans" onSubmit={handleSubmit}>
          {tab === "first" ? (
            <div className="text-[26px] text-[#730C07] font-bold">
              Daftar Sekarang
            </div>
          ) : (
            <div
              className="text-[#730C07] flex items-center gap-2 cursor-pointer"
              onClick={handleStep}
            >
              <FaArrowLeft className="text-lg" />
              <div className="text-lg text-[#730C07] font-bold">Kembali</div>
            </div>
          )}
          {tab === "first" ? (
            <div className="flex flex-col gap-6">
              <input
                id="first-name"
                type="text"
                placeholder="Nama Depan"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="shadow-lg p-6 rounded-lg w-full"
              />
              <input
                id="last-name"
                type="text"
                placeholder="Nama Belakang"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="shadow-lg p-6 rounded-lg w-full"
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="shadow-lg p-6 rounded-lg w-full"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="shadow-lg p-6 rounded-lg w-full"
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="shadow-lg p-6 rounded-lg w-full"
              />
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                onChange={handlePassword}
                value={password2}
                className="shadow-lg p-6 rounded-lg w-full"
              />
              {!password2 ? null : error === "Password Sama" ? (
                <div className="text-lime-500 text-sm">{error}</div>
              ) : (
                <div className="text-red-500 text-sm">{error}</div>
              )}
            </div>
          )}
          {tab === "first" ? (
            <div
              onClick={handleStep}
              className="w-full flex justify-center bg-[#EB3F36] rounded-lg py-6 text-white text-lg"
            >
              SELANJUTNYA
            </div>
          ) : (
            <button
              type="submit"
              className={`${
                error === "Password Sama" ? "" : "cursor-not-allowed opacity-50"
              } w-full bg-[#EB3F36] rounded-lg py-6 text-white text-lg`}
            >
              DAFTAR
            </button>
          )}
        </form>
        <div className="flex justify-center">
          <div className="border w-4/5"></div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>Sudah punya akun?</div>
          <div
            className="text-[#730C07] font-semibold cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Masuk
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
