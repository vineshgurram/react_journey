import style from "./profile-card.module.css";

const ProfileCard = ({ name, age, img }) => {
  // name = "Hello world"; // not allowed
  return (
    <div className={style.card}>
      <div className={style.avatar}>
        <img src={img} alt="" />
      </div>
      <div>
        <p style={{ textAlign: "center", textDecoration: "underline" }}>
          <strong>PROFILE CARD</strong>
        </p>
        <p>
          <strong>Name</strong> : {name}
        </p>
        <p>
          <strong>Age</strong> : {age}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
