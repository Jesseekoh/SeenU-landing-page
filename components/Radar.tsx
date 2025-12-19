export default function Radar() {
  return (
    <div className="radar scale-170" id="radar">
      <div className="orbit ring1"></div>
      <div className="orbit ring2"></div>
      <div className="orbit ring3"></div>
      <div className="center-face">
        <img
          alt="Center"
          id="centerImage"
          src="https://randomuser.me/api/portraits/men/66.jpg"
        />
      </div>
      <div className="face-orbit" style={{ animationDelay: '-1.5s' }}>
        <div className="face">
          <img
            src="https://randomuser.me/api/portraits/women/7.jpg"
            alt="Nearby person"
          />
        </div>
      </div>
      <div className="face-orbit" style={{ animationDelay: '-3s' }}>
        <div className="face">
          <img
            src="https://randomuser.me/api/portraits/men/62.jpg"
            alt="Nearby person"
          />
        </div>
      </div>
      <div className="face-orbit" style={{ animationDelay: '-4.5s' }}>
        <div className="face">
          <img
            src="https://randomuser.me/api/portraits/women/5.jpg"
            alt="Nearby person"
          />
        </div>
      </div>
      <div className="face-orbit" style={{ animationDelay: '-6s' }}>
        <div className="face">
          <img
            src="https://randomuser.me/api/portraits/men/42.jpg"
            alt="Nearby person"
          />
        </div>
      </div>
      <div className="face-orbit" style={{ animationDelay: '-7.5s' }}>
        <div className="face">
          <img
            src="https://randomuser.me/api/portraits/women/9.jpg"
            alt="Nearby person"
          />
        </div>
      </div>
      <div className="face-orbit" style={{ animationDelay: '-9s' }}>
        <div className="face">
          <img
            src="https://randomuser.me/api/portraits/women/29.jpg"
            alt="Nearby person"
          />
        </div>
      </div>
    </div>
  );
}
