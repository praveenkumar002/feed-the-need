import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/orphanageDetails.module.css";
import styled from "C:/Users/prave/Desktop/feed-the-need/src/style/DonateItem.module.css";

import { Envelope, MapPin, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../common/Footer";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function DonateItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [foodAmt, setFoodAmt] = useState(0);
  const [count, setCount] = useState(0);

  const [cloAmt, setCloAmt] = useState(0);
  const [cloCount, setCloCount] = useState(0);

  const [filterValue, setFilterValue] = useState(location.state.item);

  useEffect(() => {
    if (filterValue === "donation") {
      document.getElementById("donationDiv").style.display = "flex";
      document.getElementById("foodDiv").style.display = "none";
      document.getElementById("clothDiv").style.display = "none";
    } else if (filterValue === "food") {
      document.getElementById("donationDiv").style.display = "none";
      document.getElementById("foodDiv").style.display = "flex";
      document.getElementById("clothDiv").style.display = "none";
    } else if (filterValue === "clothes") {
      document.getElementById("donationDiv").style.display = "none";
      document.getElementById("foodDiv").style.display = "none";
      document.getElementById("clothDiv").style.display = "flex";
    }
  });

  useEffect(() => {
    setFoodAmt(count * 200);
    setCloAmt(cloCount * 300);
  }, [count, cloCount]);

  return (
    <>
      <header className={styles.headerOd}>
        <h1 className={styles.headerHeadOd}>Orphanagename</h1>
        <ul className={styles.headerUlOd}>
          <a href="#" className={styles.headerListOd}>
            <Envelope size={18} color="#a35bb8de" weight="fill" />
            &nbsp;Email
          </a>
          <a href="#" className={styles.headerListOd}>
            <MapPin size={18} color="#a35bb8de" weight="fill" />
            &nbsp;City
          </a>
          <a
            onClick={() => {
              navigate("/orpdet");
            }}
            className={`${styles.headerListButOd} ${styles.headerListOd}`}
          >
            Details
          </a>
        </ul>
      </header>

      <main className={styled.mainDi}>
        <h1 className={styled.mainHeadDi}>DONATE AND CHANGE SOMEONE'S LIFE</h1>

        <div id="donationDiv" className={styled.mainDivDi}>
          <div className={styled.mainDivboxDi}>
            <h1 className={styled.mainDivboxHeadDi}>Orphan Sponsorship</h1>
            <button className={styled.mainDivboxButtDi}>Donate</button>
          </div>

          <div className={styled.mainDivboxDi}>
            <h1 className={styled.mainDivboxHeadDi}>Orphan Fund for Food</h1>
            <div style={{ display: "flex", gap: "12px" }}>
              <p style={{ fontSize: "14px", color: "#3A3B3C" }}>
                food per person $200
              </p>
              <label>
                Date
                <input style={{ marginLeft: "0px" }} type="date" />
              </label>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label style={{ fontSize: "14px", color: "#3A3B3C" }}>
                enter the count of person
              </label>
              <input
                style={{
                  width: "30px",
                  borderRadius: "8px",
                  paddingRight: "12px",
                }}
                type="text"
                value={count}
                onChange={(event) => setCount(event.target.value)}
              />
            </div>
            <button className={styled.mainDivboxButtDi}>
              Donate ${foodAmt}
            </button>
          </div>

          <div className={styled.mainDivboxDi}>
            <h1 className={styled.mainDivboxHeadDi}>Orphan Fund for Clothes</h1>
            <div style={{ display: "flex", gap: "12px" }}>
              <p style={{ fontSize: "14px", color: "#3A3B3C" }}>
                clothes per person $300
              </p>
              <label>
                Date
                <input style={{ marginLeft: "0px" }} type="date" />
              </label>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label style={{ fontSize: "14px", color: "#3A3B3C" }}>
                enter the count of person
              </label>
              <input
                style={{
                  width: "30px",
                  borderRadius: "8px",
                  paddingRight: "12px",
                }}
                type="text"
                value={cloCount}
                onChange={(event) => setCloCount(event.target.value)}
              />
            </div>
            <button className={styled.mainDivboxButtDi}>
              Donate ${cloAmt}
            </button>
          </div>
        </div>

        <div id="foodDiv" className={styled.mainDivDi}>
          <div className={styled.mainDivboxDi}>
            <h1 className={styled.mainDivboxHeadDi}>Orphan for Food</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <label>
                Food for&nbsp;:&nbsp;
                <select
                  style={{
                    outline: "0",
                    cursor: "pointer",
                    border: "1px solid black",
                    borderRadius: "3px",
                    padding: "4px",
                    fontSize: "14px",
                    textAlign: "center",
                    height: "100%",
                    color: "black",
                  }}
                >
                  <option value="breakfast">Break fast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </label>
              <label>
                Date&nbsp;:&nbsp;
                <input style={{ marginLeft: "0px" }} type="date" />
              </label>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label style={{ fontSize: "14px", color: "#3A3B3C" }}>
                enter the food for person (approx)
              </label>
              <input
                style={{
                  width: "30px",
                  borderRadius: "8px",
                  paddingRight: "12px",
                }}
                type="text"
              />
            </div>
            <button className={styled.mainDivboxButtDi}>Donate</button>
          </div>
        </div>

        <div id="clothDiv" className={styled.mainDivDi}>
          <div className={styled.mainDivboxDi}>
            <h1 className={styled.mainDivboxHeadDi}>Orphan for Clothes</h1>
            <label>
              Date&nbsp;:&nbsp;
              <input style={{ marginLeft: "0px" }} type="date" />
            </label>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label style={{ fontSize: "14px", color: "#3A3B3C" }}>
                enter the cloths for person (approx)
              </label>
              <input
                style={{
                  width: "30px",
                  borderRadius: "8px",
                  paddingRight: "12px",
                }}
                type="text"
              />
            </div>
            <button className={styled.mainDivboxButtDi}>Donate</button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default DonateItem;
