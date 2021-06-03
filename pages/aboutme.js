

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const AboutMe = () => {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About Me - Pritam Pawar"
        className="about-page"
        canonicalPath="/about">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title`}>Hello, Welcome</h1>
              <h4 className={`subtitle`}>To About Page</h4>
              <p className={`subsubTitle`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div>
              <p>My name is Pritam Pawar and I am a full stack web developer.  </p>
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
              <p className={`subtitle`}>

              <div className="about-page-3">
                <a href="https://leetcode.com/pritampawar625/">LeetCode</a>
                    <a href="https://www.codechef.com/users/pritam_17">CodeChef</a>
                    <a href="https://www.hackerrank.com/THE_STEALTH"> HackerRank</a>
                  <a href="https://codeforces.com/profile/pritamp_17">CodeForces</a>
              </div>
              </p>
              
              <p className={`subsubTitle`}> Want to collaborate ?,
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

export default AboutMe;
