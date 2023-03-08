import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/searchOrp.module.css";
import {
  User,
  Envelope,
  Phone,
  House,
  ClockCounterClockwise,
  SignOut,
  PencilSimple,
  MagnifyingGlass,
  PaperPlaneRight,
  List,
  X,
} from "phosphor-react";
import logo from "C:/Users/prave/Desktop/feed-the-need/src/images/logoI.png";
import { useState } from "react";
// import UserHistory from "./Userhistory";
import { useNavigate } from "react-router-dom";

function OrphanageHistory() {
  const navigate = useNavigate();

  const [userDonation, setUserDonation] = useState([
    {
      UserName: "abc user",
      UserAddress: "xyz city",
      UserDonationDate: "01/01/2023",
      UserDonationTime: "12pm",
      UserDonationItem: "food",
    },
    {
      UserName: "abc user",
      UserAddress: "xyz city",
      UserDonationDate: "01/01/2023",
      UserDonationTime: "12pm",
      UserDonationItem: "food",
    },
    {
      UserName: "abc user",
      UserAddress: "xyz city",
      UserDonationDate: "01/01/2023",
      UserDonationTime: "12pm",
      UserDonationItem: "food",
    },
    {
      UserName: "abc user",
      UserAddress: "xyz city",
      UserDonationDate: "01/01/2023",
      UserDonationTime: "12pm",
      UserDonationItem: "food",
    },
  ]);

  const menuOpFun = () => {
    document.getElementById("menuBut").style.display = "none";
    document.getElementById("closeBut").style.display = "block";
    document.getElementById("aside").style.display = "flex";
    document.getElementById("section").style.display = "none";
  };

  const menuClFun = () => {
    document.getElementById("menuBut").style.display = "block";
    document.getElementById("closeBut").style.display = "none";
    document.getElementById("aside").style.display = "none";
    document.getElementById("section").style.display = "flex";
  };

  const updateAcc = (event) => {
    event.preventDefault();
    navigate("/updateorp");
  };
  const logOutAcc = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className={styles.menuBut}>
        <List
          id="menuBut"
          size={32}
          color="#030303"
          weight="bold"
          onClick={() => menuOpFun()}
        />
      </div>
      <div className={styles.divSo}>
        <aside id="aside" className={styles.asideSo}>
          <div className={styles.closeBut}>
            <X
              id="closeBut"
              size={32}
              color="#030303"
              weight="bold"
              onClick={() => menuClFun()}
            />
          </div>
          <img
            src={logo}
            alt="logo"
            className={styles.imgSo}
            style={{ height: "85px", marginBottom: "5px", alignSelf: "center" }}
          />
          <hr
            style={{ height: "1px", backgroundColor: "black", color: "black" }}
          />
          <div className={styles.asideTitleSo}>Welcome, Admin name</div>
          <ul className={styles.asideListSo}>
            <li className={styles.asideListItemSo}>
              <User size={64} color="#666666" weight="bold" />
            </li>
            <li className={styles.asideListItemSo}>praveen kumar</li>
            <li className={styles.asideListItemSo}>
              <Envelope size={19.5} color="#030303" />
              praveengovind76@gmail.com
            </li>
            <li className={styles.asideListItemSo}>
              <field>Update the current need</field>
              <select className={styles.sectionFilterSelSo}>
                <option value="Donation">Donation</option>
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
              </select>
            </li>
            <hr
              style={{
                width: "100%",
                boreder: "none",
                padding: "0.6px",
                backgroundColor: "#272727",
                color: "black",
                marginTop: "10px",
              }}
            />

            <button onClick={updateAcc} className={styles.asideListButtSo}>
              <PencilSimple size={16} color="#030303" />
              &nbsp; Manage&nbsp;account
            </button>
            <button onClick={logOutAcc} className={styles.asideListButtSo}>
              <SignOut size={16} color="#030303" />
              &nbsp;logout
            </button>
          </ul>
        </aside>

        <section
          id="section"
          className={`${styles.sectionSo} ${styles.history}`}
        >
          <h1 style={{ alignSelf: "center", fontSize: "28px" }}>
            Donataions from volunteers
          </h1>
          {userDonation.length > 0 ? (
            userDonation.map((userDon) => (
              <div className={styles.sectionSearchDetSoHis}>
                <p className={styles.sectionSearchNamSo}>{userDon.UserName}</p>
                <p className={styles.sectionSearchCitSo}>
                  {userDon.UserAddress}
                </p>
                <p className={styles.sectionSearchItmSo}>
                  {userDon.UserDonationDate}
                </p>
                <p className={styles.sectionSearchCitSo}>
                  {userDon.UserDonationTime}
                </p>
                <p className={styles.sectionSearchCitSo}>
                  {userDon.UserDonationItem}
                </p>
              </div>
            ))
          ) : (
            <h1>No Donations</h1>
          )}
        </section>
      </div>
    </>
  );
}

export default OrphanageHistory;
