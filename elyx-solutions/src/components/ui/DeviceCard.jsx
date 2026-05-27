import "./DeviceCard.css";

const DeviceCard = ({
  type,
  title,
  description,
}) => {

  return (

    <div className={`device-card ${type}`}>

      {/* ========================================
          ACTIVE BORDER TRACE
      ======================================== */}

      <div className="trace-border"></div>

      {/* ========================================
          DESKTOP DEVICE
      ======================================== */}

      {type === "desktop" && (

        <div className="desktop-device">

          {/* SCREEN */}

          <div className="desktop-screen">

            {/* TOP BAR */}

            <div className="desktop-topbar">

              <span></span>
              <span></span>
              <span></span>

            </div>

            {/* SCREEN CONTENT */}

            <div className="desktop-ui">

              <div className="ui-line long"></div>

              <div className="ui-line medium"></div>

              <div className="ui-line short"></div>

              <div className="desktop-grid">

                <div></div>
                <div></div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="device-info">

              <h3>{title}</h3>

              <p>{description}</p>

            </div>

          </div>

          {/* STAND */}

          <div className="desktop-stand"></div>

          <div className="desktop-base"></div>

        </div>

      )}
            {/* ========================================
          MOBILE DEVICE
      ======================================== */}

      {type === "mobile" && (

        <div className="mobile-device">

          <div className="mobile-screen">

            {/* NOTCH */}

            <div className="mobile-notch"></div>

            {/* UI */}

            <div className="mobile-ui">

              <div className="mobile-image"></div>

              <div className="mobile-line long"></div>

              <div className="mobile-line short"></div>

              <div className="mobile-buttons">

                <div></div>
                <div></div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="device-info mobile-info">

              <h3>{title}</h3>

              <p>{description}</p>

            </div>

          </div>

        </div>

      )}

      {/* ========================================
          SOFTWARE DEVICE
      ======================================== */}

      {type === "software" && (

        <div className="software-device">

          <div className="software-window">

            {/* HEADER */}

            <div className="software-header">

              <span></span>
              <span></span>
              <span></span>

            </div>

            {/* UI */}

            <div className="software-ui">

              <div className="software-sidebar"></div>

              <div className="software-content">

                <div className="software-line long"></div>

                <div className="software-line medium"></div>

                <div className="software-line short"></div>

                <div className="software-boxes">

                  <div></div>
                  <div></div>
                  <div></div>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="device-info">

              <h3>{title}</h3>

              <p>{description}</p>

            </div>

          </div>

        </div>

      )}
            {/* ========================================
          AI DEVICE
      ======================================== */}

      {type === "ai" && (

        <div className="ai-device">

          <div className="ai-core">

            <div className="ai-ring ring1"></div>

            <div className="ai-ring ring2"></div>

            <div className="ai-ring ring3"></div>

            <div className="ai-center"></div>

          </div>

          {/* CONTENT */}

          <div className="device-info ai-info">

            <h3>{title}</h3>

            <p>{description}</p>

          </div>

        </div>

      )}

    </div>
  );
};

export default DeviceCard;
