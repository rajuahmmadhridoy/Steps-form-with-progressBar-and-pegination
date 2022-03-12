import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const service = [{
    name: "demo service1",
    id: 1 ,
    steps: [
      { name: "What is your name1?", type: "text" },
      {
        name: "What is your gender1?",
        type: "options",
        options: ["male", "female", "donot want to tell"],
      },
      { name: "What is your age1?", type: "number" },
      {
        name: "What type of service you want1?",
        type: "options",
        options: [{ name: "ser 1", img: "jfdjfk" }],
      },
    ],
  },
  {
    name: "demo service2",
    id: 2 ,
    steps: [
      {
        name: "What is your gender1?",
        type: "options",
        options: ["male", "female", "donot want to tell"],
      },
      { name: "What is your name1?", type: "text" },
      { name: "What is your age1?", type: "number" },
      {
        name: "What type of service you want1?",
        type: "options",
        options: [{ name: "ser 1", img: "jfdjfk" }],
      },
    ],
  },
  {
    name: "demo service3",
    id: 3,
    steps: [
      { name: "What is your name?", type: "text" },
      // {
      //   name: "What is your gender?",
      //   type: "options",
      //   options: ["male", "female", "donot want to tell"],
      // },
      { name: "What is your age?", type: "number" },
      {
        name: "What type of service you want?",
        type: "options",
        options: [{ name: "ser 1", img: "jfdjfk" }],
      },
    ],
  }
];
  return (
    <div>
      {service.map((data) => (
        <Link to={`header/${data.id}`}> {data.name}</Link>
      ))}
    </div>
  );
};

export default Home;
