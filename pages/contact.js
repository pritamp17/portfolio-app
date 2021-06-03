import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Row, Col } from 'reactstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const ContactMe = () => {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="Contact Me - Pritam Pawar"
         className="about-page"
        canonicalPath="/contact">
        
        <Row className="mt-5">
            <div className="contactPage-2">
                    <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" autocomplete="off" />
                  </FormGroup> 
                  
                  <FormGroup>
                    <Label for="exampleText">Message </Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
              
                  <Button className='btn-primary'>Send</Button>
                </Form>
            </div>
        </Row>
        
        <Row className="mt-5">

        <div className="contactPage-2">
        
              <Row>
                <Col> <a href="https://www.linkedin.com/in/pritam-pawar-070788197/"><LinkedInIcon/></a></Col>
                <Col> <a href="https://twitter.com/PritamP02788124"><TwitterIcon/></a></Col>
                <Col> <a href="https://www.facebook.com/pritam.pawar.7967/"><FacebookIcon/></a></Col>
                <Col> <a href="https://github.com/pritamp17"><GitHubIcon/></a></Col>
            </Row> 
            
        </div>

        </Row>

      </BasePage>
    </BaseLayout>
  )
}

export default ContactMe;