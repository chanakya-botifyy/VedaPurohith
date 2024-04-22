import * as React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import puorithlogin from '../../Assets/puorithlogin.png';
import { Link } from "react-router-dom";
import instance from '../../../Utils/Api';
import eye from '../../Assets/eye.png';


function PurohithRegistrationForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const fileInput = useRef(null);
  const [data, setData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Address: '',
    DateofBirth: '',
    Location: '',
    Languages: '',
    PanNumber: '',
    AadharNumber: '',
    DetailsFile: '',
    Certificates: '',
    Experience: '',
    AccountNumber: '',
    IfscCode: '',
    BankName: '',
    Password: '',
    ConfirmPassword: ''
  });

  const handleSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  console.log(data);

  const submitHandler = e => {
    e.preventDefault();
    instance.post('/addPurohithDetails', data)
      .then(res => {
        alert(JSON.stringify(res.data.message));
        document.getElementById('purohithform').reset();
      })
      .catch(error => {
        if (error.response && error.response.data) {
          alert(JSON.stringify(error.response.data.message)); // Display error message
        } else {
          alert('An error occurred'); // Display generic error message
        }
      });
  }


  const handleFileSelectDetailsFile = async () => {
    const formData = new FormData();
    formData.append('Details', fileInputRef.current.files[0]);

    try {
      const request = await instance.post('/uploaddetails', formData);
      const imageUrl = request.data.image_url;
      setData({ ...data, DetailsFile: imageUrl });
    } catch (error) {

      console.error('Upload failed. Error:', error);
    }
  };

  // const handleFileSelectCertificates = async () => {
  //   const formData = new FormData();
  //   formData.append('Certificates', fileInput.current.files[0]);

  //   try {
  //     const response = await instance.post('/uploadcertificates', formData);
  //     const imageUrl = request.data.image_url;
  //     setData({ ...data, Certificates: imageUrl });

  //   } catch (error) {
  //     console.error('Upload failed. Error:', error);
  //   }
  // };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form>
      <RegistrationFormWrapper id="purohithform" onSubmit={submitHandler} >
        <RegistrationFormHeader>
          <RegistrationFormTitle>Purohith Registration</RegistrationFormTitle>
        </RegistrationFormHeader>
        <WelcomeSection>
          <WelcomeMessage>
            <WelcomeTitle>Welcome Back</WelcomeTitle>
            <WelcomeDescription>
              Enter your Details to Create your account.
            </WelcomeDescription>
            <WelcomeImage src={puorithlogin} alt="Welcome" />
          </WelcomeMessage>
        </WelcomeSection>
        <RegistrationFormContent>
          <RegistrationFormColumns>
            <RegistrationFormColumn>
              <RegistrationFormField>
                <RegistrationFormLabel>Full Name*</RegistrationFormLabel>
                <RegistrationFormInput type="text" placeholder="Enter your Full name" name="Name" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormField>
                <RegistrationFormLabel>Phone Number*</RegistrationFormLabel>
                <RegistrationFormInput
                  type="number"
                  placeholder="Enter your Number"
                  name="Phone"
                  onChange={handleSubmit}
                  onInput={(e) => {
                    // Restrict to 10 digits
                    e.target.value = e.target.value.slice(0, 10);
                    // Ensure the entered number starts with 9, 8, 7, or 6
                    const validPrefixes = ['9', '8', '7', '6'];
                    const inputValue = e.target.value;
                    if (inputValue.length >= 1 && !validPrefixes.includes(inputValue.charAt(0))) {
                      e.target.setCustomValidity('Mobile number must start with 9, 8, 7, or 6.');
                    } else {
                      e.target.setCustomValidity('');
                    }
                  }}
                  required
                  autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormField>
                <RegistrationFormLabel>Email*</RegistrationFormLabel>
                <RegistrationFormInput type="email" placeholder="Enter your email" name="Email" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormField>
                <RegistrationFormLabel>Address*</RegistrationFormLabel>
                <RegistrationFormTextarea type="text" placeholder="Enter your Address" name="Address" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormField>
                <RegistrationFormLabel>Date of Birth*</RegistrationFormLabel>
                <RegistrationFormInputdate placeholder="Enter your Date of birth (DD/MM/YY)" type="date" name="DateofBirth" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              {/* <RegistrationFormField>
                <RegistrationFormLabel>Introduction</RegistrationFormLabel>
                <RegistrationFormTextarea type="text" placeholder="Write some brief introduction" />
              </RegistrationFormField> */}
              <RegistrationFormField>
                <RegistrationFormLabel>Languages*</RegistrationFormLabel>
                <RegistrationFormTextarea type="text" placeholder="Enter Known languages" name="Languages" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
            </RegistrationFormColumn>
            <RegistrationFormColumn>
              <RegistrationFormField>
                <RegistrationFormLabel>PAN Number*</RegistrationFormLabel>
                <RegistrationFormInput type="text" placeholder="Enter your PAN Number" name="PanNumber" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormField>
                <RegistrationFormLabel>Aadhaar Number*</RegistrationFormLabel>
                <RegistrationFormInput type="number" placeholder="Enter your Aadhaar Number" name="AadharNumber" onChange={handleSubmit} onInput={(e) => { e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 12); }} required autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormField>
                <RegistrationFormLabel>Experience*</RegistrationFormLabel>
                <RegistrationFormInput type="text" placeholder="Enter your Experience in years" name="Experience" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormUpload>
                <RegistrationFormUploadLabel>
                  Upload Photo, Aadhaar, Pan,Certificates in one PDF file*
                </RegistrationFormUploadLabel>
                <RegistrationFormUploadContent>
                  <RegistrationFormUploadTitle >
                    File Upload
                  </RegistrationFormUploadTitle>
                  <RegistrationFormUploadDropzone>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/94003cb189ccbeda13759e33ffde73abe21019fdf172d4a80c4f8eca7884f689?apiKey=eb7f15f1bc7c491391257f0dd51005fc&"
                      alt="Upload icon"
                      loading="lazy"
                    />
                    <RegistrationFormUploadText>
                      Drop your file here
                    </RegistrationFormUploadText>
                    <RegistrationFormUploadText>
                      Or
                    </RegistrationFormUploadText>
                    <input id="file-upload" ref={fileInputRef} type="file" name="Detailsfile" style={{ display: 'none' }} onChange={handleFileSelectDetailsFile} accept=".pdf" required />
                    <RegistrationFormUploadButton for="file-upload" style={{ display: 'inline-block' }}  >Browse</RegistrationFormUploadButton>

                  </RegistrationFormUploadDropzone>
                </RegistrationFormUploadContent>
              </RegistrationFormUpload>

              {/* <RegistrationFormUpload>
                <RegistrationFormUploadLabel>
                  Upload Certificates and Recognitions
                </RegistrationFormUploadLabel>
                <RegistrationFormUploadContent>
                  <RegistrationFormUploadTitle>
                    File Upload
                  </RegistrationFormUploadTitle>
                  <RegistrationFormUploadDropzone>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4435131fc6058111fa9a87d2fd58de17331ae7d0e1f161b08d1260de20ba624?apiKey=eb7f15f1bc7c491391257f0dd51005fc&"
                      alt="Upload icon"
                      loading="lazy"
                    />
                    <RegistrationFormUploadText>
                      Drop your file here
                    </RegistrationFormUploadText>
                    <RegistrationFormUploadText>
                      Or
                    </RegistrationFormUploadText>
                    <input id="file-upload" ref={fileInput} type="file" name="Certificates" style={{ display: 'none' }} />
                    <RegistrationFormUploadButton for="file-upload" style={{ display: 'inline-block' }} onClick={handleFileSelectCertificates} >Browse</RegistrationFormUploadButton>

                  </RegistrationFormUploadDropzone>
                </RegistrationFormUploadContent>
              </RegistrationFormUpload> */}

            </RegistrationFormColumn>

            <RegistrationFormColumn>
              <RegistrationFormField>
                <RegistrationFormLabel>Bank Account Number*</RegistrationFormLabel>
                <RegistrationFormInput type="number" placeholder="Enter your Bank Account Number" name="AccountNumber" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormField>
                <RegistrationFormLabel>IFSC Code*</RegistrationFormLabel>
                <RegistrationFormInput type="text" placeholder="Enter your IFSC Code" name="IfscCode" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              <RegistrationFormField>
                <RegistrationFormLabel>Bank Name*</RegistrationFormLabel>
                <RegistrationFormInput type="text" placeholder="Enter your Bank Name" name="BankName" onChange={handleSubmit} required autoComplete='off' />
              </RegistrationFormField>
              <PasswordLabel>Password*</PasswordLabel>
              <PasswordInputWrapper>
                <PasswordInput type={showPassword ? 'text' : 'password'} placeholder="Enter your password" name='Password' onChange={handleSubmit} autoComplete='off' required />
                <PasswordVisibilityToggle src={eye} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
              </PasswordInputWrapper>
              <PasswordLabel>Re Enter Password*</PasswordLabel>
              <PasswordInputWrapper>
                <PasswordInput type={showPassword ? 'text' : 'password'} placeholder="Enter your password" name='ConfirmPassword' onChange={handleSubmit} autoComplete='off' required />
                <PasswordVisibilityToggle src={eye} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
              </PasswordInputWrapper>
            </RegistrationFormColumn>
          </RegistrationFormColumns>
        </RegistrationFormContent>
        <SubmitButton>
          Submit
        </SubmitButton>
        <Link to={'/Purohith'} style={{ textDecoration: 'none' }}>
          <Loginbu>Already have an account? Login</Loginbu>
        </Link>
      </RegistrationFormWrapper>
    </Form>
  );
}

const PasswordLabel = styled.label`
  color: #121212;
  text-align: left;
  font-size: 11px;
  font-weight: 400;
  line-height: 143%;
  margin-top: 18px;
`;

const PasswordInputWrapper = styled.div`
  justify-content: center;
  border-radius: 6.211px;
  border: 1px solid rgba(237, 237, 237, 1);
  background-color: #fff;
  display: flex;
  margin-top: 7px;
  gap: 8px;
  color: #6b6b6b;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  line-height: 143%;
  padding: 11px 12px;


  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PasswordInput = styled.input`
    flex-grow: 1;
    flex-basis: auto;
    border:none;
    outline:none;
    font-size: 11px;
  font-weight: 400;
  
  

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PasswordVisibilityToggle = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 16px;
  align-self: start;
  cursor: pointer;
`;
const ForgotPassword = styled.div`
display:flex;
flex-direction: row;
margin-top:10px;
font-size: 11px;
  font-weight: 400;

`

const Form = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-content: center;
background-color: #F3FDFF;
margin-top: 76px;
@media (max-width:991px){
background-color: white;
}

`;

const RegistrationFormWrapper = styled.form`
  align-items: center;
  border: 1px solid rgba(191, 191, 191, 1);
  border-radius: 23.293px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  width: 1139px;
  margin: 30px;
  @media (max-width:991px){
  border: none;
  border-radius: none;
  width: 337px;

}
`;

const RegistrationFormHeader = styled.header`
  align-items: center;
  align-self: stretch;
  border-bottom: 2px solid rgba(0, 0, 0, 1);
  color: #000;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  line-height: 148%;
  padding: 0 60px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
    border: none;
    padding: 0px;
    margin: 0px;
  }
`;
const WelcomeSection = styled.section`
  

  @media (max-width: 991px) {
    

    display: flex;
  flex-direction: column;
  line-height: normal;
  margin-left: 0px;

  }
`;

const WelcomeMessage = styled.div`
  

  @media (max-width: 991px) {
    white-space: initial;
    justify-content: center;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  width: 310px;
  }
`;

const WelcomeTitle = styled.h2`
  display: none;

  @media (max-width: 991px) {
    white-space: initial;
    display: initial;
    color: #121212;
  /* letter-spacing: 1.24px; */
  font-size: 37px;
  font-weight: 400;
  margin: 0px;
  }
`;

const WelcomeDescription = styled.p`
  display: none;

  @media (max-width: 991px) {
    white-space: initial;
    color: #3d3d3d;
  /* letter-spacing: -0.22px; */
  margin-top: 12px;
  font-size: 11px;
  font-weight: 400;
  display: initial;
  }
`;

const WelcomeImage = styled.img`
  display: none;
  @media (max-width:991px){
    width: 148px;
    height: 118px;
    aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  mix-blend-mode: luminosity;
  align-self: center;
  margin-top: 37px;
  display: initial;
  }
`;


const RegistrationFormTitle = styled.h1`
  align-items: center;
  justify-content: center;
  /* max-width: 100%; */
  padding: 11px 0px;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 991px) {
    padding: 0 20px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const RegistrationFormContent = styled.div`
  justify-content: center;
  margin-top: 45px;
  max-width: 100%;
  width: 1033px;

  @media (max-width: 991px) {
    margin-top: 0px;
  }
`;

const RegistrationFormColumns = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    align-items: stretch;
    flex-direction: column;
    gap: 0px;
  }
`;

const RegistrationFormColumn = styled.div`
  color: #121212;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.43px;
  line-height: 143%;
  margin-left: 0px;
  width: 33%;

  @media (max-width: 991px) {
    margin-top: 0px;
    width: 100%;
  }
`;

const RegistrationFormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  width: 310px;
`;

const RegistrationFormLabel = styled.label`
  font-weight: 400;
  font-style: normal;
  text-align: left;
  font-size: 11px;
  @media (max-width: 991px) {
    font-size: 11px;
    font-weight: 400;
  }
`;
const RegistrationFormInputdate = styled.input`
  background-color: #fff;
  border: 1px solid rgba(237, 237, 237, 1);
  border-radius: 6.211px;
  color: #6b6b6b;
  justify-content: center;
  margin-top: 6px;
  padding: 11px 12px;
  font-size: 11px;
    font-weight: 400;
    width: 305px;
  @media (max-width: 991px) {
    font-size: 11px;
    font-weight: 400;
    width: 310px;
  }
`

const RegistrationFormInput = styled.input`
  background-color: #fff;
  border: 1px solid rgba(237, 237, 237, 1);
  border-radius: 6.211px;
  color: #6b6b6b;
  justify-content: center;
  margin-top: 6px;
  padding: 11px 12px;
  font-size: 11px;
    font-weight: 400;
    width: 305px;
    appearance: none;
  @media (max-width: 991px) {
    font-size: 11px;
    font-weight: 400;
  }
  /* Hide spinners for number input */
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Optionally, you can hide the arrows in Firefox */
  /* &[type="number"] {
    -moz-appearance: textfield;
  } */
`;

const RegistrationFormTextarea = styled.textarea`
  background-color: #fff;
  border: 1px solid rgba(237, 237, 237, 1);
  border-radius: 6.211px;
  color: #6b6b6b;
  margin-top: 7px;
  padding: 10px 12px;
  height: 50px;
  resize: none;
  width: 305px;
`;

const RegistrationFormUpload = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 37px;

  @media (max-width: 991px) {
    /* margin-right: 4px; */
  }
`;

const RegistrationFormUploadLabel = styled.span`
  letter-spacing: -0.43px;
  text-align: left;
  font-size: 11px;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: 400;
  }

`;

const RegistrationFormUploadContent = styled.div`
  background-color: var(--Neutral-Gray-Gray-25, #f9f9fc);
  border: 1px solid rgba(224, 226, 231, 1);
  border-radius: 8px;
  color: #5d6370;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin-top: 6px;
  padding: 9px 45px;

  @media (max-width: 991px) {
    
  }
`;

const RegistrationFormUploadTitle = styled.span`
  align-self: center;
  font-size: 14px;
  letter-spacing: 0.07px;
`;

const RegistrationFormUploadDropzone = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px dashed rgba(178, 178, 178, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  letter-spacing: 0.06px;
  line-height: 167%;
  margin-top: 6px;
  padding: 10px 56px;
  flex-wrap: wrap;
  align-content: center;

  @media (max-width: 991px) {
    padding: 10px 20px;
  }

  img {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 40px;
  }
`;

const RegistrationFormUploadText = styled.span`
  /* align-self: stretch; */
  margin-top: 4px;
  font-size: 12px;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
  }
`;

const RegistrationFormUploadButton = styled.label`
  background: linear-gradient(180deg, #02c5dc 0%, #0292d7 100%);
  border-radius: 10px;
  color: #fff;
  justify-content: center;
  margin-top: 4px;
  padding: 5px 20px;
  white-space: nowrap;
  cursor: pointer;

`;

const SubmitButton = styled.button`
background: linear-gradient(180deg, #02c5dc 0%, #0292d7 100%);
  border-radius: 10px;
  color: #fff;
  justify-content: center;
  margin-top: 37px;
  padding: 5px 20px;
  width: 330px;
  white-space: nowrap;
  padding: 15px 0px;
  font-size: 15px;
`;
const Loginbu = styled.p`
  cursor  : pointer;
  text-decoration: none;
    color: black;
  @media (max-width: 991px){
    font-size: 11px;
    font-weight: 400;
    text-decoration: none;
    color: black;
  }
`;

export default PurohithRegistrationForm;