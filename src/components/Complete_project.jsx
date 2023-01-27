import React, { useState, useEffect } from 'react'
import project_1 from '../assests/images/complete-project/project-1.png'
import project_2 from '../assests/images/complete-project/project-2.png'
import project_3 from '../assests/images/complete-project/project-3.png'
import project_4 from '../assests/images/complete-project/project-4.png'
import project_5 from '../assests/images/complete-project/project-5.png'
import project_6 from '../assests/images/complete-project/project-6.png'
import dropdown_icon from '../assests/images/complete-project/down-arrow.png'


const Complete_project = () => {

    const [All, setAll] = useState(true);
    const [Programming, setProgramming] = useState(false);
    const [Development, setDevelopment] = useState(false);
    const [Design, setDesign] = useState(false);
    const [Application, setApplication] = useState(false);

    const [optionValue, setOptionValue] = useState('All');

    const [dropdown, setdropdown] = useState(window.innerWidth < 991 ? true : false);
    const [toggledrop, settoggledrop] = useState(false);

    useEffect(() => {
        function handleResize() {

            if (window.innerWidth < 991) {
                setdropdown(true)
            } else {
                setdropdown(false);
            }
        }
        window.addEventListener('resize', handleResize)
    }, [dropdown])


    const mobiledrop = () => {
        if (toggledrop === false) {
            setAll(true);
            setProgramming(false)
            setDevelopment(false)
            setDesign(false)
            setApplication(false)
            settoggledrop(true)
            setdropdown(true)
        } else {
            setAll(true);
            settoggledrop(false)

        }
    }


    const hanldeImage = (e) => {
        switch (e.target.value) {
            case 'all':
                setAll(true)
                setProgramming(false)
                setOptionValue('All')
                setDevelopment(false)
                setDesign(false)
                setApplication(false)
                break;
            case "programing":
                setProgramming(true)
                setOptionValue('Programming')
                setAll(false)
                setDevelopment(false)
                setDesign(false)
                setApplication(false)
                break;
            case "development":
                setDevelopment(true)
                setOptionValue('Development')
                setAll(false)
                setProgramming(false)
                setDesign(false)
                setApplication(false);
                break;
            case "design":
                setDesign(true)
                setOptionValue('Design')
                setAll(false)
                setDevelopment(false)
                setProgramming(false)
                setApplication(false)
                break;
            case "application":
                setApplication(true)
                setOptionValue('Application')

                setAll(false)
                setDesign(false)
                setProgramming(false)
                setDevelopment(false)
                break;
            default:
                break;
        }
        settoggledrop(false)
        document.querySelector('.complete-project-img').style.marginTop = '30px'

    }

   

    return (
        <>


            <section className="complete-project-section">
                <div className="container text-center">
                    <div className="complete-project-field">
                        <div className={dropdown ? 'project-all' : ''}>
                            <h1 className='text-center'>Our Complete Projects</h1>
                            <div className={dropdown ? 'dropdown' : 'complete-project-heading'}>
                                <div className='all-menu'>
                                    <button className={optionValue === 'All' ? 'active' : ''} value='all' onClick={dropdown ? mobiledrop : hanldeImage}>{window.innerWidth < 991 ? optionValue : 'All'} <img src={dropdown_icon} alt="" /></button>
                                </div>

                                <div className={toggledrop ? 'catagory-programming' : 'category-drop'}>
                                    {
                                        window.innerWidth < 991 && optionValue != 'All' ? <button value="all" className={optionValue === 'All' ? 'active' : ''} onClick={hanldeImage} style={{ display: 'block' }}>All</button> : <></>
                                    }
                                    <button value="programing" className={optionValue === 'Programming' ? 'active' : ''} onClick={hanldeImage}>Programming</button>
                                    <button value='development' className={optionValue === 'Development' ? 'active' : ''} onClick={hanldeImage}>Development</button>
                                    <button value='design' className={optionValue === 'Design' ? 'active' : ''} onClick={hanldeImage} style={dropdown ? { display: "block" } : { display: 'inline' }}>Design</button>
                                    <button value='application' className={optionValue === 'Application' ? 'active' : ''} onClick={hanldeImage}>Application</button>
                                </div>

                            </div>
                        </div>
                        <div className='complete-project-img' id='complete'>
                            {
                                All &&
                                <>
                                    <div className='img'>
                                        <img src={project_1} alt="" />
                                    </div>
                                    <div className='img'>
                                        <img src={project_2} alt="" />
                                    </div>
                                    <div className='img'>
                                        <img src={project_3} alt="" />
                                    </div>
                                    <div className='img'>
                                        <img src={project_4} alt="" />
                                    </div>
                                    <div className='img'>
                                        <img src={project_5} alt="" />
                                    </div>
                                    <div className='img'>
                                        <img src={project_6} alt="" />
                                    </div>
                                </>
                            }

                            {
                                Programming && <>
                                    <div className='img'>
                                        <img src={project_2} alt="" />
                                    </div>
                                    <div className='img'>
                                        <img src={project_3} alt="" />
                                    </div>
                                </>
                            }
                            {
                                Development && <>
                                    <div className='img'>
                                        <img src={project_1} alt="" />
                                    </div>
                                    <div className='img'>
                                        <img src={project_3} alt="" />
                                    </div>
                                </>
                            }
                            {
                                Design && <>
                                    <div className='img'>
                                        <img src={project_4} alt="" />
                                    </div>
                                    <div className='img' >
                                        <img src={project_5} alt="" />
                                    </div>
                                    <div className='img'>
                                        <img src={project_6} alt="" />
                                    </div>

                                </>
                            }
                            {
                                Application && <>
                                    <div className='img'>
                                    <img src={project_5} alt="" />
                                    </div>
                                    <div className='img'>
                                    <img src={project_6} alt="" />
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Complete_project
