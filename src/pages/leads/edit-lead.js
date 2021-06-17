import React, { Component } from 'react';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Select from '@paljs/ui/Select';
import styled from 'styled-components';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Container } from '@material-ui/core';
import { Card, CardBody } from '@paljs/ui/Card';

import SEO from '../../components/SEO';
import { isLoggedIn } from '../../components/services/auth';
import { 
  getURLParams, leadStatus, leadDisposition, 
  leadCrisisScale, leadYesNo, leadUsers
} from '../../components/utils/common';

const isBrowser = typeof window !== "undefined";

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

const SelectStyled = styled(Select)`
  margin-bottom: 0.25rem;
`;


export default class EditLead extends Component {
  state = {
    LeadID: 0,
    LeadName: 'Sample: RACHEAL MILLER',
    LeadInfo: {
      ParentName: 'Asiah Joy Harmon',
      PatientGender: 'Female, ',
      PatientAge: 'age 14, ',
      IsAdopted: 'not adopted',
      IsDrugUse: 'Drugs/alcohol, ',
      IsSexuallyActive: 'sexually active,',
      IsViolent: 'Displayed violence, ',
      IsCourtOrdered: 'court ordered',
      Diagnosis: 'Anxiety depression ',
      HomePhone: '308-660-0251',
      Email: 'm9ssm9ller@gmail.com',
      FirstName: 'RACHEAL',
      LastName: 'MILLER'
    }
  };
  componentDidMount() {
    if (!isLoggedIn() && isBrowser ) {
      window.location.href="/"
    }
    const { saveState } = this;
    const LeadID = getURLParams('leadID');
    saveState({ LeadID });
  }
  saveState = (obj) => {
    this.setState(obj);
  }
  onChangeOption = () => {}
  onBack = () => {}
  onPrintView = () => {}
  render() {
    const { onBack, onPrintView, onChangeOption, state: { LeadName, LeadID, LeadInfo } } = this;
    return (<>
      <SEO title="View/Edit Lead" />
      <div className="content-wrapper px-4 py-4">
        <Container style={{ height: 'auto', marginBottom: '1rem' }}>
          <Row>
            <Col breakPoint={{ xs: 2 }}>
              <Button className="mx-1" status="Info" type="button" shape="square" onClick={onBack.bind(this)} fullWidth>BACK</Button>
            </Col>
            <Col breakPoint={{ xs: 2 }}>
              <Button className="mx-1" status="Success" type="button" shape="square" onClick={onPrintView.bind(this)} fullWidth>PRINT VIEW</Button>
            </Col>
          </Row>
        </Container>
        <Card>
          <CardBody>
            <Container>
              <Row className="justify-content-center align-items-center mb-5">
                <Col breakPoint={{ xs: 12 }}>
                  <h2 className="text-center mb-5">View/Edit {LeadName} ({LeadID})</h2>
                  <p className="text-center">
                    Child: <i>{LeadInfo.ParentName}</i><br/>
                    {LeadInfo.PatientGender}{LeadInfo.PatientAge}{LeadInfo.IsAdopted}
                    <span className="d-block text-danger">{LeadInfo.IsDrugUse}{LeadInfo.IsSexuallyActive}</span>
                    <span className="d-block text-danger">{LeadInfo.IsViolent}{LeadInfo.IsCourtOrdered}</span>
                  </p>
                </Col>
                <Col breakPoint={{ xs: 12 }}>  
                  <Row className="mb-2">
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="Status">Status:</label>
                      <SelectStyled options={leadStatus} id="Status" name="Status" onChange ={onChangeOption.bind(this)} />
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="Disposition">Disposition:</label>
                      <SelectStyled options={leadDisposition} id="Disposition" name="Disposition" onChange ={onChangeOption.bind(this)} />
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="CrisisScale">CrisisScale:</label>
                      <SelectStyled options={leadCrisisScale} id="CrisisScale" name="CrisisScale" onChange ={onChangeOption.bind(this)} />
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="InitialRep">Initial Rep:</label>
                      <SelectStyled options={leadUsers} id="InitialRep" name="InitialRep" onChange ={onChangeOption.bind(this)} />
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="AssignedAdvocate">Assigned Advocate:</label>
                      <SelectStyled options={leadUsers} id="AssignedAdvocate" name="AssignedAdvocate" onChange ={onChangeOption.bind(this)} />
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="FirstName">First Name:</label>
                      <Input fullWidth size="Medium" className="Name">
                        <input type="text" placeholder={LeadInfo.FirstName} id="FirstName" name="FirstName" onChange ={onChangeOption.bind(this)}/>
                      </Input>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="LastName">Last Name:</label>
                      <Input fullWidth size="Medium" className="Name">
                        <input type="text" placeholder={LeadInfo.LastName} id="LastName" name="LastName" onChange ={onChangeOption.bind(this)}/>
                      </Input>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="Email">Email:</label>
                      <Input fullWidth size="Medium" className="Name">
                        <input type="text" placeholder={LeadInfo.Email} id="Email" name="Email" onChange ={onChangeOption.bind(this)}/>
                      </Input>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="HomePhone">Home Phone:</label>
                      <Input fullWidth size="Medium" className="Name">
                        <input type="text" placeholder={LeadInfo.HomePhone} id="HomePhone" name="HomePhone" onChange ={onChangeOption.bind(this)}/>
                      </Input>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="SubstanceAbuse">Substance Abuse?:</label>
                      <SelectStyled options={leadYesNo} id="SubstanceAbuse" name="SubstanceAbuse" onChange ={onChangeOption.bind(this)} />
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="MentalHealth">Mental Health:</label>
                      <SelectStyled options={leadYesNo} id="MentalHealth" name="MentalHealth" onChange ={onChangeOption.bind(this)} />
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="DualDiagnosis">Dual Diagnosis:</label>
                      <SelectStyled options={leadYesNo} id="DualDiagnosis" name="DualDiagnosis" onChange ={onChangeOption.bind(this)} />
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }} className="mb-2">
                      <label htmlFor="Diagnosis">Diagnosis:</label>
                      <Input fullWidth size="Medium" className="Name">
                        <input type="text" placeholder={LeadInfo.Diagnosis} id="Diagnosis" name="Diagnosis" onChange ={onChangeOption.bind(this)}/>
                      </Input>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 6 }}>
                        <Button status="Success" type="button" shape="SemiRound" fullWidth className="text-uppercase">SAVE {LeadName}'s LEAD PROFILE</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
    </>);
  }
}