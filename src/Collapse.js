import { useState } from "react";
import "./Collapse.css";
const Collapse = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="collapsible">
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>Collapse</p>
            <div className="toggle" onClick={() => setIsActive(!isActive)}>
                <h3>collapse</h3>
                <span className={isActive ? 'plus anim' : 'plus'}>{isActive ? "-" : "+"}</span>
            </div>
            {/* <div className={isActive ? "content-parent show" : "content-parent"}>
                <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat
                    quos similique minus earum accusantium nulla quibusdam inventore sequi
                    perferendis.
                </div>
            </div> */}
            <div className={isActive ? "content-parent show" : "content-parent"}>
                <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat
                    quos similique minus earum accusantium nulla quibusdam inventore sequi
                    perferendis.
                </div>
            </div>
        </div>
    );
};

export default Collapse;
