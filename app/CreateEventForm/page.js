"use client";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function page() {
  const [event, setEvent] = useState({
    Name: "",
    EventTitle: "",
    Email: "",
    Date: "",
    Time: "",
    Duration: "",
    NumOfPerson: "",
    Location: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);

  const emailValidation = (em) => {
    setEvent({ ...event, Email: em });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(em)) {
      setEmailError("Email is valid");
      setIsEmailValid(true);
    } else {
      setEmailError("Email is Invalid");
      setIsEmailValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError === "Email is valid") {
      // console.log("Email is valid you can proceed");
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center mb-10 mt-10">
        <form
          className="w-[90%] lg:w-[55%] px-5 lg:px-6 flex flex-col mt-5 shadow-xl rounded-2xl py-14"
          onSubmit={handleSubmit}
        >
          <label className="text-2xl lg:text-4xl font-semibold font-serif text-center tracking-wide my-5">
            Event Form
          </label>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Name:</h1>
              <TextField
                id="outlined-basic"
                label="Name"
                className='w-full'
                variant="outlined"
                value={event.Name}
                onChange={(e) =>
                  setEvent({ ...event, Name: e.target.value })
                }
                required
              />
            </div>

            <div className="flex flex-col">
              <h1 className="mb-3 ml-1 font-semibold">Email:</h1>
              <TextField
                id="outlined-basic"
                type="email"
                label="Email"
                className='w-full'
                variant="outlined"
                value={event.Email}
                onChange={(e) => emailValidation(e.target.value)}
                required
              />
              <p
                className={`text-md tracking-wider font-serif ${isEmailValid === true ? "text-green-500" : isEmailValid === false ? "text-red-500" : ""}`}>
                {emailError}
              </p>
            </div>
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Event Title:</h1>
              <TextField
                id="outlined-basic"
                label="EventTitle"
                className='w-full'
                variant="outlined"
                value={event.EventTitle}
                onChange={(e) =>
                  setEvent({ ...event, EventTitle: e.target.value })
                }
                required
              />
            </div>
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Date:</h1>
              <TextField
                id="outlined-basic"
                type="date"
                className='w-full'
                variant="outlined"
                value={event.Date}
                onChange={(e) =>
                  setEvent({ ...event, Date: e.target.value })
                }
                required
              />
            </div>
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Time:</h1>
              <TextField
                id="outlined-basic"
                label="Time"
                className='w-full'
                variant="outlined"
                value={event.Time}
                onChange={(e) =>
                  setEvent({ ...event, Time: e.target.value })
                }
                required
              />
            </div>
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Duration:</h1>
              <TextField
                id="outlined-basic"
                className='w-full'
                variant="outlined"
                type="time"
                value={event.Duration}
                onChange={(e) =>
                  setEvent({ ...event, Duration: e.target.value })
                }
                required
              />
            </div>
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Number Of Persons:</h1>
              <TextField
                id="outlined-basic"
                label="Num Of Persons"
                className='w-full'
                variant="outlined"
                type="number"
                value={event.NumOfPerson}
                onChange={(e) =>
                  setEvent({ ...event, NumOfPerson: e.target.value })
                }
                required
              />
            </div>
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Location</h1>
              <TextField
                id="outlined-basic"
                label="Location"
                className='w-full'
                variant="outlined"

                value={event.Location}
                onChange={(e) =>
                  setEvent({ ...event, Location: e.target.value })
                }
                required
              />
            </div>

          </div>
          <div className="flex justify-end mt-5">
            <Button
              type="submit"
              variant="outlined"
              className="py-2 border-black text-white bg-black tracking-wider hover:scale-95"
            >
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
