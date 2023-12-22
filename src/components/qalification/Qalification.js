import React, { useState } from 'react';
import "./Qalification.css";

const Qalification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
   <section className="qalification section">
    <h2 className="section__title">Qalification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qalification__container container">
            <div className="qalification__tabs">
                <div className={toggleState === 1 ? "qalification__button qalification__active button--flex" : "qalification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qalification__icon"></i>Education 
                </div>

                <div className={toggleState === 2 ? "qalification__button qalification__active button--flex" : "qalification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qalification__icon"></i>Experience 
                </div>
            </div>

            <div className="qalification__sections">
                <div className={toggleState === 1 ? "qalification__content qalification__content-active" : "qalification__content"}>
                    <div className="qalification__data">
                        <div>
                            <h3 className="qalification__title">Web Design</h3>
                            <span className="qalification__subtitle">ADGIPS</span>
                            <div className="qalification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - Present 
                            </div>
                        </div>
                        <div>
                            <span className="qalification__rounder"></span>
                            <span className="qalification__line"></span>
                        </div>
                    </div>
                    <div className="qalification__data">
                        <div></div>
                        <div>
                            <span className="qalification__rounder"></span>
                            <span className="qalification__line"></span>
                        </div>

                        <div>
                            <h3 className="qalification__title">UI Design</h3>
                            <span className="qalification__subtitle">ADGIPS</span>
                            <div className="qalification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022  
                            </div>
                        </div>
                    </div>

                   
                   
                    <div className="qalification__data">
                        <div>
                            <h3 className="qalification__title">Web Development</h3>
                            <span className="qalification__subtitle">ADGIPS</span>
                            <div className="qalification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2023 
                            </div>
                        </div>
                        <div>
                            <span className="qalification__rounder"></span>
                            <span className="qalification__line"></span>
                        </div>
                    </div>
                    <div className="qalification__data">
                        <div></div>
                        <div>
                            <span className="qalification__rounder"></span>
                            <span className="qalification__line"></span>
                        </div>

                        <div>
                            <h3 className="qalification__title">UX Expert</h3>
                            <span className="qalification__subtitle">ADGIPS</span>
                            <div className="qalification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2023 
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={toggleState === 2 ? "qalification__content qalification__content-active" : "qalification__content"}>
                    <div className="qalification__data">
                        <div>
                            <h3 className="qalification__title">DSA</h3>
                            <span className="qalification__subtitle">ADGIPS</span>
                            <div className="qalification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - Present 
                            </div>
                        </div>
                        <div>
                            <span className="qalification__rounder"></span>
                            <span className="qalification__line"></span>
                        </div>
                    </div>
                    <div className="qalification__data">
                        <div></div>
                        <div>
                            <span className="qalification__rounder"></span>
                            <span className="qalification__line"></span>
                        </div>

                        <div>
                            <h3 className="qalification__title">UX Designer</h3>
                            <span className="qalification__subtitle">CodeSoft</span>
                            <div className="qalification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022  
                            </div>
                        </div>
                    </div>

                    <div className="qalification__data">
                        <div>
                            <h3 className="qalification__title">Web Designer</h3>
                            <span className="qalification__subtitle">Figma</span>
                            <div className="qalification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023 
                            </div>
                        </div>
                        <div>
                            <span className="qalification__rounder"></span>
                            <span className="qalification__line"></span>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        
   </section>
  )
}

export default Qalification
