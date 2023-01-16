import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { AiOutlineArrowDown } from "react-icons/ai";

const Digitale = () => {
  return (
    <>
      <DigitaleDiv>
        <DigitaleHeading>Consulenza Digitale ,</DigitaleHeading>
        <DigitaleButtonDiv>
          <DigitaleButton>Per Tutti</DigitaleButton>
        </DigitaleButtonDiv>
        <DigitaleParagraph>
          Un élite di esperti Software, Designer e Marketer.
        </DigitaleParagraph>
      </DigitaleDiv>
      <MobileDiv>
        <Wrapper>
          <MobileOuterDiv>
            <PenelopeSkin>
              <PenelopeSkinInner>
                <PenelopeImg src="penelope.webp" alt="not found" />
                <PenelopePara>
                  <PenelopeHeading>Penelope Skin</PenelopeHeading>

                  <PenelopeParaParagraph>E-Commerce</PenelopeParaParagraph>
                </PenelopePara>
              </PenelopeSkinInner>
            </PenelopeSkin>
            <CosaDiv>
              <Link
                activeClass="active"
                to="perche"
                spy={true}
                smooth={true}
                offset={50}
              >
                <OuterCosa>
                  <CosaHeading>COSA FACCIAMO</CosaHeading>
                  <AiOutlineArrowDown className="arrow-icon" />
                </OuterCosa>
              </Link>
            </CosaDiv>
            <PenelopeSkin>
              <PenelopeSkinInner>
                <PenelopeImg src="bariberi.webp" alt="not found" />
                <PenelopePara>
                  <PenelopeHeading>Barbieri b'jou</PenelopeHeading>

                  <PenelopeParaParagraph>E-Commerce</PenelopeParaParagraph>
                </PenelopePara>
              </PenelopeSkinInner>
            </PenelopeSkin>
          </MobileOuterDiv>
        </Wrapper>
      </MobileDiv>
    </>
  );
};

const DigitaleDiv = styled.div`
  text-align: center;
`;

const DigitaleHeading = styled.div`
  font-family: "Poppins", sans-serif;
  color: #00204c;
  font-size: 7rem;
  font-weight: 600;
`;

const DigitaleButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const DigitaleButton = styled.div`
  border: none;
  background: #9f00ee;
  width: 26%;
  color: #fff;
  margin-top: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 7rem;
  border-radius: 7rem;
`;

const DigitaleParagraph = styled.div`
  padding-top: 3rem;
  font-size: 2.8rem;
  font-weight: bold;
  line-height: normal;
  color: #00204c;
`;

const MobileDiv = styled.div`
  background: url("mobile.webp") no-repeat;
  background-size: cover;
  min-height: 157vh;
  background-position: -121px -245px;
`;

const Wrapper = styled.section`
  padding: 5rem 16rem 0 16rem;
`;

const MobileOuterDiv = styled.div`
  display: grid;
  gap: 9rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const PenelopeSkin = styled.div`
  padding: 3rem;
  margin: 0 3rem;
  width: 60%;
  background: #fff;
  box-shadow: 6.43px 7.66px 10px 0px rgba(167, 0, 250, 0.1);
  border-radius: 3rem;
`;

const PenelopeSkinInner = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const PenelopeImg = styled.img`
  border: 6px solid #eaf2ff;
  border-radius: 3rem;
`;

const PenelopePara = styled.div``;

const PenelopeHeading = styled.h1`
  font-size: 20px;
`;

const PenelopeParaParagraph = styled.p`
  font-size: 12px;
  font-weight: 800;
`;

const CosaDiv = styled.div`
  margin: 0 auto 0 auto;
  color: #9f00ee;
`;

const CosaHeading = styled.h1`
  font-size: 1.8rem;
  letter-spacing: 0.25em;
  font-weight: bold;
`;

const OuterCosa = styled.div`
  cursor: pointer;
  .arrow-icon {
    display: block;
    font-size: 4rem;
    margin: 1rem auto 0 auto;
  }
`;

export default Digitale;
