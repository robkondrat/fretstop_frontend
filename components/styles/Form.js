import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid var(--offWhite);
  padding: 20px;
  font-size: 2.2rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    color: var(--darkBlue);
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 2rem;
    border: 3px solid var(--darkBlue);
    &:focus {
      outline: 0;
      border-color: var(--blue);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: var(--darkBlue);
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #F1FAEE 0%,
        #1D3557 50%,
        #F1FAEE 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.9s linear infinite;
    }
  }
`;

export default Form;
