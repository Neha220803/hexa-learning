import React from 'react'

const SchoolSection = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={6}>
                <h1>
                Comprehensive School
                Consultancy Services
                </h1>
                <p>
                We provide end to end solutions in school operations
                    </p>
                </Col>
                <Col lg={6}>
                <p>
                At Hexa Learning, we provide expert consultancy services to schools,
ensuring efficient operations and enhanced educational outcomes.
Our services range from strategic site selection to comprehensive
teacher training, tailored to meet the unique needs of each
institution.
                </p>
                <ul>
                    <li>
                    Identifying possible school location
                    </li>
                    <li>
                    Takeover of existing schools
                    </li>
                    <li>
                    Catchment analysis
                    </li>
                </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SchoolSection