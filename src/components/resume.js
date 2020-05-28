import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import atunde from '../images/atunde.jpg';
import Education from './education'
import Experience from './experience'
import Skills from './skills'
class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img 
                        src={atunde}
                        alt="avatar"
                        className="avatar-img"
                        style={{height: '200px'}}/>

                        </div>
                        <h2 style={{paddingTop: '200px'}}> Atunde Arisekola</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fe2', width: '50%'}} />
                        <p> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.

                        </p>
                        <hr style={{borderTop: '3px solid #833fe2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>10, Alhaji Atunde Arogunmasa Street, Ashimolowo, Mowe, Ogun State, Nigeria</p>
                        <h5>Phone</h5>
                        <p>(234) 8159109387</p>
                        <h5>Email</h5>
                        <p>atundearisekola@gmail.com</p>
                        <h5>Website</h5>
                        <p>atundearisekola.com</p>
                        <hr style={{borderTop: '3px solid #833fe2', width: '50%'}} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                        startYear={2012} 
                        endYear={2018}
                        schoolName="Olabisi Onabanjo University"
                        schoolDescription="Olabisi Onabanjo University, Ago-Iwoye is a state (owned and operated) university in Ago-Iwoye, Ogun State, Nigeria. The university was founded July 7, 1982 as Ogun State University (OSU) and was renamed Olabisi Onabanjo University on May 29, 2001 in honour of Chief (Dr.) Olabisi Onabanjo, whose efforts as the then civilian governor of Ogun State gave birth to the university. Meanwhile, many students still refer to the institution as OSU, an acronym for the former name.
                        The university has had a total output of 10,291 graduates and 1,697 postgraduates.                        
                        Olabisi Onabanjo University has multiple campuses. The Main Campus in Ago-Iwoye is popularly called Permanent Site (PS) by the students and a Mini Campus which was the home of the Faculty of Science till it was moved to the permanent site in January 2013. Faculty of Agriculture is in Aiyetoro, faculty of Engineering is in Ibogun, College of Medicine, faculties of Basic Medical Sciences and Pharmacy are in Shagamu. Students and alumni of the Olabisi Onabanjo University are addressed as ‘Great OOUITES.’ "/>

                         <hr style={{borderTop: '3px solid #e22947'}} />
                         <h2>Experience</h2>
                        <Experience
                        startYear={2012} 
                        endYear='Present'
                        jobName="Full Stack Developer"
                        jobDescription="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
                        
                        />

                   <hr style={{borderTop: '3px solid #e22947'}} />
                   <h2>Skills</h2>
                   <Skills Skill="JavaScript" progress={100}/>
                   <Skills Skill="Java" progress={80}/>
                   <Skills Skill="NodeJS" progress={100}/>
                   <Skills Skill="PHP/Laravel" progress={100}/>
                   <Skills Skill="React" progress={90}/>
                   <Skills Skill="Python" progress={60}/>
                   <Skills Skill="SQL" progress={100}/>
                   <Skills Skill="Firebase" progress={80}/>
                   <Skills Skill="MongoDB" progress={70}/>
                   


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;