import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import atunde from '../images/myimage.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={atunde}
                alt="avatar"
                className="avatar-img"
                style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddingTop: '2rem' }}> Atunde Arisekola</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fe2', width: '50%' }} />
            <p>
              {' '}
              I am an experienced Full-Stack developer and social media manager,
              I am proficient in the use of Java, PHP, Javascript, Node.js and
              Python, I am proficient in the use of Frameworks including
              (React.js, React Native, Next.js, Gatsby, Laravel), I have well
              understanding of tools like Docker, Kubernetics and micro-service
              architecture.
            </p>
            <hr style={{ borderTop: '3px solid #833fe2', width: '50%' }} />
            <h5>Address</h5>
            <p>
              10, Alhaji Atunde Arogunmasa Street, Ashimolowo, Mowe, Ogun State,
              Nigeria
            </p>
            <h5>Phone</h5>
            <p>(234) 8159109387</p>
            <h5>Email</h5>
            <p>atundearisekola@gmail.com</p>
            <h5>Website</h5>
            <p>https://my-portfolio-khaki.vercel.app</p>
            <hr style={{ borderTop: '3px solid #833fe2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2018}
              schoolName="Olabisi Onabanjo University"
              schoolDescription="Olabisi Onabanjo University, Ago-Iwoye is a state (owned and operated) university in Ago-Iwoye, Ogun State, Nigeria. The university was founded July 7, 1982 as Ogun State University (OSU) and was renamed Olabisi Onabanjo University on May 29, 2001 in honour of Chief (Dr.) Olabisi Onabanjo, whose efforts as the then civilian governor of Ogun State gave birth to the university.  "
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>

            <Experience
              startYear="June' 2020"
              endYear="July' 2020"
              jobName="Full Stack Developer at Excellent & Strategic Solutions"
              jobDescription="Excellent & Strategic Solutions is a Tech solution startup, Work as a Remote Full Stack developer to develop  client Applications."
            />
            <Experience
              startYear={2018}
              endYear="Present"
              jobName="Full Stack Developer at Kleanary Laundry&Dry Cleaning Service"
              jobDescription="Kleanary is a laundry & Dry cleaning company, i work as a software Engineer to develop and maintain  Kleanary web and mobile Appliction, which allow user to easily request and track their laundry activities"
            />
            <Experience
              startYear={2016}
              endYear="2018"
              jobName="Full Stack Developer at Aubics"
              jobDescription="Aubics is an ecommerce platform, i worked to develop and maintain Aubics website."
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills Skill="JavaScript" progress={100} />
            <Skills Skill="Java" progress={80} />
            <Skills Skill="NodeJS" progress={100} />
            <Skills Skill="PHP/Laravel" progress={100} />
            <Skills Skill="React" progress={90} />
            <Skills Skill="Python" progress={60} />
            <Skills Skill="SQL" progress={100} />
            <Skills Skill="Firebase" progress={80} />
            <Skills Skill="MongoDB" progress={70} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
