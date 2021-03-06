

import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';


const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    }
  })

  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
    }

    return 'fadein';
  }


  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About Me - Pritam Pwar"
        className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>My name is Pritam Pawar and I am a full stack web developer. </p>
              <p>
              I'm pursuing my Bachelors degree from NIT-ALLAHABAD (MNNIT) majoring in Electrical Engineering.
              </p>
              <p>
              I am an aspiring full-stack web developer and competitive programmer with profound knowledge 
              of Data structures.
              <br/>
              <br/>
              Have a look on my competitive programming profiles.
              </p>
             
              <p className={`subsubTitle ${createFadeInClass()}`}>

              <div className="about-page-3">
                {/* <a href="https://leetcode.com/pritampawar625/">LeetCode</a>
                     <a href="https://www.codechef.com/users/pritam_17">CodeChef</a>
                    <a href="https://www.hackerrank.com/THE_STEALTH"> HackerRank</a>
                   <a href="https://codeforces.com/profile/pritamp_17">CodeForces</a> */}

                   <a href="https://www.codechef.com/users/pritam_17" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg" alt="pritam_17" height="30" width="40" /></a>
                  <a href="https://www.hackerrank.com/THE_STEALTH" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg" alt="THE_STEALTH" height="30" width="40" /></a>
                  <a href="https://codeforces.com/profile/pritamp_17" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codeforces.svg" alt="pritamp_17" height="30" width="40" /></a>
                  <a href="https://leetcode.com/pritampawar625/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/leetcode.svg" alt="pritampawar625/" height="30" width="40" /></a>
              </div>
              </p>
              <p className={`subsubTitle ${createFadeInClass()}`}> Want to collaborate ?,
              <br />
              <a href="/contact">Connect with me</a> !
              </p>
            </div>

          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default About;
