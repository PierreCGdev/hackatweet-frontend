import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/SignIn.module.css";
// import { useDispatch } from "react-redux";
// import { login } from "../reducers/user.js";
// import { useRouter } from "next/router";
import Input from "./Input.js";
import Button from "./Button.js";

function ModalSign({
  title,
  handleClickClose,
  handleSign,
  firstname,
  setFirstName,
  username,
  setUsername,
  password,
  setPassword,
  errorMessage,
  setErrorMessage,
  firstNameVisible = false,
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.form}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{errorMessage}</p>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClickClose}
            style={{ fontSize: "22px", cursor: "pointer" }}
          />
        </div>
        <img
          style={{ width: "50px", height: "auto", transform: "scale(-1, -1)" }}
          src="/tweeter-logo.png"
          alt="logo-tweeter"
        />
        <p style={{ fontSize: "24px" }}>{title}</p>
        {firstNameVisible && (
          <Input
            type={"text"}
            onChange={setFirstName}
            value={firstname}
            placeholder={"Firstname"}
          />
        )}

        <Input
          type={"text"}
          onChange={setUsername}
          value={username}
          placeholder={"Username"}
        />

        <Input
          type={"password"}
          onChange={setPassword}
          value={password}
          placeholder={"Password"}
        />

        <Button
          color={"#0F1419"}
          bgColor={"white"}
          border={"white solid 1px"}
          fontWeight={700}
          text={"Sign in"}
          handleClick={handleSign}
          paddingHorizontal={80}
        />
      </div>
    </div>
  );
}

export default ModalSign;
