import React, { useRef, useState } from 'react'
import './collapseTwo.css'
const CollapseTwo = () => {
    const p1 = useRef(null);
    const p2 = useRef(null);

    const elementsArray = [p1, p2];
    function hideText(element) {
        for (let i = 0; i < 2; i++) {
            if (!elementsArray[i].current.classList.contains("not-active")) {
                elementsArray[i].current.classList.add("not-active");
            }
            if (element.current.classList.contains("not-active")) {
                element.current.classList.remove("not-active");
            }
        }
    }
    const collapseHandle = () => {
        setIsOpen(!isOpen)
        hideText(elementsArray)
    }
    const parentRef = useRef();
    const [isOpen, setIsOpen] = useState(false)
    //if (parentRef.current) console.log(parentRef.current.scrollHeight)
    return (
        <>
            <div className='collapsible-two'>
                <div className="toggle-two" onClick={collapseHandle}>
                    collapse
                </div>
                <div className="content-parent-two not-active" ref={parentRef} style={isOpen ? { height: parentRef.current.scrollHeight + "px" } : {
                    height: "0px",
                }}>
                    <div className="content-two">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat quos similique minus earum accusantium nulla quibusdam inventore sequi perferendis.
                    </div>
                </div>
            </div>

        </>
    )
}
export default CollapseTwo