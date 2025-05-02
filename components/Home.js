import styles from "../styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";

function Home() {
  const [inputText, setInputText] = useState("");
  const [stringLength, setStringLength] = useState(0);

  return (
    <div className={styles.main}>
      <div className={styles.leftContent}>
        <img
          src="/tweeter-logo.png"
          alt="logo twitter"
          className={styles.logo}
        />
        <div>
          <div className={styles.leftBottom}>
            <img src="/egg.jpg" alt="logo twitter" className={styles.icon} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
                alignItems: "flex-start",
                justifyContent: "space-around",
              }}
            >
              <p className={styles.firstnameText}>name</p>
              <p className={styles.usernameText}>username</p>
            </div>
          </div>
          <button className={styles.logoutButton}>Logout</button>
        </div>
      </div>

      <div className={styles.middleContent}>
        <div
          style={{ borderBottom: "solid 1px #697381", paddingBottom: "30px" }}
        >
          <div>
            <h3 style={{ paddingLeft: "15px" }}>Home</h3>
            <div className={styles.newTweetContainer}>
              <textarea
                className={`${
                  inputText ? styles.tweetInput : styles.tweetPlaceholder
                }`}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setInputText(newValue);
                  setStringLength(newValue.length);
                }}
                value={inputText}
                placeholder="What's up?"
              ></textarea>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <p style={{ marginRight: "10px" }}>
                  <span>{stringLength}</span>/280
                </p>
                <button className={styles.btn_signup}>Tweet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>right</div>
    </div>
  );
}

export default Home;
