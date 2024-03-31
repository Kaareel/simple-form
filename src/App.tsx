import Button from "./components/Button";
import Description from "./components/Description";
import Trial from "./components/Trial";
import Image from "./components/Image";
import Input from "./components/Input";
import Title from "./components/Title";
import Terms from "./components/Terms";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isInput, setIsInput] = useState(false);

  const validEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };
  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLastName(value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmail(validEmail(value));
  };
  console.log("email: ", email);
  console.log("isEmail: ", isEmail);
  console.log("validEmail: ", validEmail(email));
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleButtonClick = () => {
    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setIsInput(true);
    } else if (validEmail(email) === true) {
      setIsInput(false);
      setIsEmail(true);
    }
  };

  return (
    <div className="bg-bgColor h-screen relative">
      <Image 
      src="/bg-intro-desktop.png" 
      srcSet="/bg-intro-desktop.png x1, /bg-intro-mobile.png 2"/>
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
              text="then $20/mo. thereafter"/>
            </div>
            <div className="bg-white pt-[18px] px-2 flex flex-col justify-center items-center text-center rounded-[5px] w-90"> 
            <Input
              type="text"
              id="name"
              placeholder="First Name"
              value={name}
              onChange={handleChangeName}
              isInput={isInput}
              isEmail={isEmail}
            />
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChangeLastName}
              isInput={isInput}
              isEmail={isEmail}
            />
            <Input
              type="email"
              id="email"
              placeholder="Email Name"
              value={email}
              onChange={handleChangeEmail}
              isInput={isInput}
              isEmail={isEmail}
            />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
              isInput={isInput}
              isEmail={isEmail}
            />
            <Button text="Claim your free trial" onClick={handleButtonClick} />
            <Terms
              text="By clicking the button, you are agreeing to our"
              segment="Terms and Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
