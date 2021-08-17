import styled from "styled-components";

export const Container = styled.div`
  width: 0px;
  height: 100vh;
  background-color: var(--secondaryColor);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  &.active {
    width: 200px;
    box-shadow: 0px 0px 15px 3px var(--tertiaryColor);
    @media (max-width: 768px) {
      width: 130px;
    }
  }
  .light {
    color: var(--tertiaryColor);
    font-size: 20px;
    position: absolute;
    left: 5%;
    bottom: 8%;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  .dark {
    color: var(--tertiaryColor);
    font-size: 20px;
    position: absolute;
    left: 63%;
    bottom: 8%;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 22px;
    font-weight: 400;
    width: 65%;
    @media (max-width: 768px) {
      font-size: 20px;
      font-weight: 500;
    }
    li {
      margin-bottom: 25px;
      a {
        font-size: inherit;
        color: var(--tertiaryColor);
      }
      @media (min-width: 769px) {
        &:hover {
          font-weight: 500;
        }
      }
    }
  }
  .switch {
    position: absolute;
    left: 30%;
    bottom: 7.6%;
    display: inline-block;
    width: 60px;
    height: 34px;
    @media (max-width: 768px) {
      width: 35px;
      height: 24px;
      left: 33%;
    }
  }
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: all 1s ease;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: all 1s ease;
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
  input:checked + .slider {
    background-color: var(--background);
  }
  input:focus + .slider {
    box-shadow: 0 0 1px var(--background);
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    @media (max-width: 768px) {
      -webkit-transform: translateX(12px);
      -ms-transform: translateX(12px);
      transform: translateX(12px);
    }
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`;
