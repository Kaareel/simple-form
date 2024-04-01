import Button from "./components/Button";
import Description from "./components/Description";
import Trial from "./components/Trial";
import Image from "./components/Image";
//import input from "./components/input";
import Title from "./components/Title";
import Terms from "./components/Terms";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
  });

  const validEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChangeName = (event: any) => {
    const value = event.target.value;
    setName(value);
  };
  const handleChangeLastName = (event: any) => {
    const value = event.target.value;
    setLastName(value);
  };
  const handleChangeEmail = (event: any) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmail(validEmail(value));
  };
  console.log("email: ", email);
  console.log("isEmail: ", isEmail);
  console.log("validEmail: ", validEmail(email));
  const handleChangePassword = (event: any) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!name) {
      setError({ ...error, name: true });
      return;
    }
    if (!lastName) {
      setError({ ...error, lastName: true });
      return;
    }
    if (!email && isEmail === true) {
      setError({ ...error, email: true });
      setIsEmail(true);
      return;
    }
    if (!password) {
      setError({ ...error, password: true });
      return;
    }
    setError({
      name: false,
      lastName: false,
      email: false,
      password: false,
    });
  };

  return (
    <div className="bg-bgColor h-screen relative">
      <Image
        src="/bg-intro-desktop.png"
        srcSet="/bg-intro-desktop.png x1, /bg-intro-mobile.png 2"
      />
      <div className="flex flex-cols justify-center items-center text-center relative z-10">
        <div className="mx-8 mt-8 w-1/4">
          <Title title="Learn to code by watching others" />
          <Description
            description="See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable."
          />
        </div>
        <div className="flex flex-col justify-center items-center mx-10 mt-8 w-1/2">
          <div className="bg-bgColor w-90">
            <Trial
              segment="Try it free 7 days "
              text="then $20/mo. thereafter"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white pt-[18px] px-2 flex flex-col justify-center items-center text-center rounded-[5px] w-90"
          >
            <div>
              <input
                type="text"
                id="name"
                placeholder="First Name"
                value={name}
                onChange={handleChangeName}
                className={`w-90 p-[16px] mb-1 font-semibold rounded-5 text-black leading-[26px] text-base font-['inherit'] border-2 border-solid focus:outline-none focus:ring-bgColor focus:border-bgColor ${
                  error.name ? "border-red-500" : "border-gray-500"
                }`}
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={handleChangeLastName}
                className={`w-90 p-[16px] mb-1 font-semibold rounded-5 text-black leading-[26px] text-base font-['inherit'] border-2 border-solid focus:outline-none focus:ring-bgColor focus:border-bgColor ${
                  error.lastName ? "border-red-500" : "border-gray-500"
                }`}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email Name"
                value={email}
                onChange={handleChangeEmail}
                className={`w-90 p-[16px] mb-1 font-semibold rounded-5 text-black leading-[26px] text-base font-['inherit'] border-2 border-solid focus:outline-none focus:ring-bgColor focus:border-bgColor ${
                  error.email ? "border-red-500" : "border-gray-500"
                }`}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
                className={`w-90 p-[16px] mb-1 font-semibold rounded-5 text-black leading-[26px] text-base font-['inherit'] border-2 border-solid focus:outline-none focus:ring-bgColor focus:border-bgColor ${
                  error.password ? "border-red-500" : "border-gray-500"
                }`}
              />
            </div>
            <Button
              type="submit"
              text="Claim your free trial"
              onClick={handleSubmit}
            />
            <Terms
              text="By clicking the button, you are agreeing to our"
              segment="Terms and Services"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
