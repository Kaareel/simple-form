import Button from "./components/Button";
import Description from "./components/Description";
import Trial from "./components/Trial";
import Image from "./components/Image";
import Input from "./components/Input";
import Title from "./components/Title";
import Terms from "./components/Terms";
import Icon from "./components/Icon";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ [key: string]: string }>({});

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
  };

  const handleChangePassword = (event: any) => {
    const value = event.target.value;
    setPassword(value);
  };

  function validate() {
    const newError: { [key: string]: string } = {
      name: "",
      lastName: "",
      email: "",
      password: "",
    };
    if (!name) {
      newError.name = "Name is required";
    } else {
      newError.name = "";
    }
    if (!lastName) {
      newError.lastName = "LastName is required";
    } else {
      newError.lastName = "";
    }
    if (!email) {
      newError.email = "Email is required";
    } else if (!validEmail(email)) {
      newError.email = "Email is invalid";
    } else {
      newError.email = "";
    }
    if (!password) {
      newError.password = "Password is required";
    } else if (password.length < 8) {
      newError.password = "password must be least 8 characters";
    } else {
      newError.password = "";
    }

    return newError;
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const errors = validate();
    setError(errors);
    if (Object.values(errors).length > 0) {
      return;
    }
  };

  return (
    <div className="bg-bgColor min-h-screen flex justify-center relative">
  <Image
    src="/bg-intro-desktop.png"
    srcSet="/bg-intro-desktop.png x1, /bg-intro-mobile.png 2"
  />
  <div className=" flex flex-col lg:flex-row relative mx-auto lg:justify-between">
    <div className="lg:mx-8 lg:my-14 lg:w-1/4 mt-8 lg:mt-0 flex flex-col justify-center items-center">
      <Title title="Learn to code by watching others" />
      <Description
        description="See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable."
      />
    </div>
    <div className="flex flex-col justify-center items-center mx-auto lg:w-1/2 lg:max-w-[650px]">
      <div className="bg-bgColor w-90 text-center my-4 mx-8">
        <Trial
          segment="Try it free 7 days "
          text="then $20/mo. thereafter"
        />
      </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white pt-[18px] px-2 flex flex-col justify-center items-center text-center rounded-[5px] w-90 "
            noValidate
          >
            <div className={`w-full relative flex flex-col ${error.name ? "mb-0" : "mb-3"}`}>
              <Input
                type="text"
                id="name"
                placeholder="First Name"
                value={name}
                onChange={handleChangeName}
                error={error.name}
              />
              {error.name && (
                <p className="text-red-500 text-sm text-right w-95 mb-2 italic">{error.name}</p>
              )}
              {error.name && (<Icon/>)}
            </div>
            <div className={`w-full relative flex flex-col ${error.lastName ? "mb-0" : "mb-3"}`}>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={handleChangeLastName}
                error={error.lastName}
              />
              {error.lastName && (
                <p className="text-red-500 text-sm text-right w-95 mb-2 italic">{error.lastName}</p>
              )}
              {error.lastName && (<Icon/>)}
            </div>
            <div className={`w-full relative flex flex-col ${error.email ? "mb-0" : "mb-3"}`}>
              <Input
                type="email"
                id="email"
                placeholder="Email Name"
                value={email}
                onChange={handleChangeEmail}
                error={error.email}
              />
              {error.email && (
                <p className="text-red-500 text-sm text-right w-95 mb-2 italic">{error.email}</p>
              )}
              {error.email && (<Icon/>)}
            </div>
            <div className={`w-full relative flex flex-col ${error.password ? "mb-0" : "mb-3"}`} >
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
                error={error.password}
              />
              {error.password && (
                <p className="text-red-500 text-sm text-right w-95 mb-2 italic">{error.password}</p>
              )}
              {error.password && (<Icon/>)}
            </div>
            <div className="w-full ">
              <Button type="submit" text="Claim your free trial" />
              <div className="text-center">
              <Terms
                text="By clicking the button, you are agreeing to our"
                segment="Terms and Services"
              />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
