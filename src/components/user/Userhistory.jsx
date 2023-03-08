import styles from "C:/Users/prave/Desktop/feed-the-need/src/style/searchOrp.module.css";
import { useState } from "react";
function UserHistory() {
  const [orphanage, setOrphanage] = useState([
    { OrphanageName: "abc", city: "xyz", item: "food", date: "27/01/2023" },
    { OrphanageName: "abc", city: "xyz", item: "food", date: "27/01/2023" },
    { OrphanageName: "abc", city: "xyz", item: "food", date: "27/01/2023" },
    { OrphanageName: "abs", city: "xyz", item: "food", date: "27/01/2023" },
  ]);

  return (
    <>
      <section id="section" className={`${styles.sectionSo} ${styles.history}`}>
        {orphanage.length > 0 ? (
          orphanage.map((orp) => (
            <div className={styles.sectionSearchDetSo}>
              <p className={styles.sectionSearchNamSo}>{orp.OrphanageName}</p>
              <p className={styles.sectionSearchCitSo}>{orp.city}</p>
              <p className={styles.sectionSearchItmSo}>{orp.item}</p>
              <p className={styles.sectionSearchCitSo}>{orp.date}</p>
              <button
                style={{ backgroundColor: "green" }}
                className={styles.SectionButtSo}
              >
                Donated
              </button>
            </div>
          ))
        ) : (
          <h1>No Donations</h1>
        )}
      </section>
    </>
  );
}

export default UserHistory;
