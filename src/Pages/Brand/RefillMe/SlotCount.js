import React, { useState } from "react";
import styled from "styled-components";
import Slot from "react-slot-machine";

const SlotCount = (showSlot) => {
  const [numTarget, setNumTarget] = useState(0);

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const subList = [",", ",", ",", ",", ",", ",", ","];

  return (
    <SlotForm
      onMouseOver={
        showSlot.showSlot === 0 ? () => setNumTarget(numTarget + 1) : ""
      }
      opacity={showSlot.showSlot}
    >
      <Slot
        className="slot numFont"
        duration={2200}
        target={numTarget + 1}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="slot numFont"
        duration={2500}
        target={numTarget + 3}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="slot numFont"
        duration={2800}
        target={numTarget}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="subSlot numFont"
        duration={3100}
        target={numTarget}
        times={5}
      >
        {subList.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="slot numFont"
        duration={3400}
        target={numTarget + 8}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="slot numFont"
        duration={3700}
        target={numTarget + 8}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="slot numFont"
        duration={4000}
        target={numTarget + 8}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="subSlot numFont"
        duration={4300}
        target={numTarget}
        times={5}
      >
        {subList.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="slot numFont"
        duration={4600}
        target={numTarget + 8}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="slot numFont"
        duration={4900}
        target={numTarget + 8}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
      <Slot
        className="slot numFont"
        duration={5200}
        target={numTarget + 8}
        times={5}
      >
        {list.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </Slot>
    </SlotForm>
  );
};

export default SlotCount;

const SlotForm = styled.div`
  display: flex;
  justify-content: center;
  height: 158px;
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  overflow: hidden;
  transition: opacity 0.5s ease-in-out;

  .slot {
    font-size: 100px;
    text-align: center;
    line-height: 1.6;
    letter-spacing: 4px;
    color: #4477be;
    transition: all 0.3s ease-in-out;
  }

  .subSlot {
    font-size: 100px;
    text-align: center;
    line-height: 1.6;
    letter-spacing: 4px;
    color: #4477be;
    transition: all 0.3s ease-in-out;
  }
`;
