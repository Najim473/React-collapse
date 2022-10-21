import React, { useRef } from 'react'
import './collapseThree.css'
const CollapseTwo = () => {
    const p1 = useRef(null);
    const p2 = useRef(null);
    const p3 = useRef(null);
    const p4 = useRef(null);
    const p5 = useRef(null);
    const elementsArray = [p1, p2, p3, p4, p5];
    function hideText(element) {
        for (let i = 0; i < 5; i++) {
            if (!elementsArray[i].current.classList.contains("not-active")) {
                elementsArray[i].current.classList.add("not-active");
            }
            if (element.current.classList.contains("not-active")) {
                element.current.classList.remove("not-active");
            }
        }
    }

    //if (parentRef.current) console.log(parentRef.current.scrollHeight)
    return (
        <>
            <div className="container">

                <div className="textBox">
                    <h1>FAQ</h1>
                    <div className="questions">
                        <div>
                            <button
                                onClick={() => {
                                    hideText(p1);
                                }}
                            >
                                How many team members can I invite?
                            </button>
                            <div ref={p1} className="p1 not-active">
                                <p >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Temporibus obcaecati, quae, corporis.
                                </p>
                                <p >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Temporibus obcaecati, quae, corporis.
                                </p>     <p >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Temporibus obcaecati, quae, corporis.
                                </p>     <p >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Temporibus obcaecati, quae, corporis.
                                </p>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <button
                                onClick={() => {
                                    hideText(p2);
                                }}
                            >
                                How many team members can I invite?
                            </button>
                            <p ref={p2} className="p2 not-active">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Temporibus obcaecati, quae, corporis.
                            </p>
                        </div>

                        <hr />
                        <div>
                            <button
                                onClick={() => {
                                    hideText(p3);
                                }}
                            >
                                How many team members can I invite?
                            </button>
                            <p ref={p3} className="p3 not-active">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Temporibus obcaecati, quae, corporis.
                            </p>
                        </div>

                        <hr />

                        <div>
                            <button
                                onClick={() => {
                                    hideText(p4);
                                }}
                            >
                                How many team members can I invite?
                            </button>
                            <p ref={p4} className="p4 not-active">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Temporibus obcaecati, quae, corporis.
                            </p>
                        </div>

                        <hr />

                        <div>
                            <button
                                onClick={() => {
                                    hideText(p5);
                                }}
                            >
                                How many team members can I invite?
                            </button>
                            <p ref={p5} className="p5 not-active">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Temporibus obcaecati, quae, corporis.
                            </p>
                        </div>

                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CollapseTwo