import React from 'react';
import './styles.css';

const HelloWorldList = () => {
  const dateTime = new Date().toLocaleString(); 

  const HelloWorld = ({ styleClass, dateTime }) => {
    return (
      <div className={`hello-world ${styleClass}`}>
        <p>Hello World!</p>
        <p>{dateTime}</p>
      </div>
    );
  };

  return (
    <div>
    <HelloWorld styleClass="style1" dateTime={dateTime} />
    <HelloWorld styleClass="style2" dateTime={dateTime} />
    <HelloWorld styleClass="style3" dateTime={dateTime} />
    <HelloWorld styleClass="style4" dateTime={dateTime} />
    <HelloWorld styleClass="style5" dateTime={dateTime} />
    <HelloWorld styleClass="style6" dateTime={dateTime} />
    <HelloWorld styleClass="style7" dateTime={dateTime} />
    <HelloWorld styleClass="style8" dateTime={dateTime} />
    <HelloWorld styleClass="style9" dateTime={dateTime} />
    <HelloWorld styleClass="style10" dateTime={dateTime} />
  </div>
  );
};

export default HelloWorldList;