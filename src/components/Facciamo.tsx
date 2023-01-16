import React from "react";
import styled from "styled-components";

const Facciamo = () => {
  return (
    <Wrapper>
      <FacciamoDiv>
        <CosaSpan>Cosa </CosaSpan>
        <FacciamoSpan> facciamo?</FacciamoSpan>
      </FacciamoDiv>
      <FacciamoPara>
        <FacciamoParaParagraph>
          Sviluppiamo software curandone la progettazione, la creazione e la
          post-produzione.
        </FacciamoParaParagraph>
      </FacciamoPara>
      <FacciamoPara1>
        <FacciamoParaParagraph1>
          Siamo capaci di mantenerli nel tempo e costruirli sulla base delle
          vostre richieste aiutandovi anche nel posizionamento di mercato.
        </FacciamoParaParagraph1>
      </FacciamoPara1>

      <OuterFacciamoDiv>
        <PlatFormDiv className="platform-img">
          <PlatformSpan>App mobile e piattaforme Web</PlatformSpan>
        </PlatFormDiv>
        <EcommerceDiv className="ecommerce-img">
          <EcommerceSpan>E-Commerce e Siti Web</EcommerceSpan>
        </EcommerceDiv>
        <div className="branding-img">
          <span>Branding posizionam e crescita</span>
        </div>

        <div className="vedi-img">
          <span>Vedi di piu</span>
        </div>
      </OuterFacciamoDiv>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
`;

const FacciamoDiv = styled.div`
  text-align: center;
`;

const CosaSpan = styled.span`
  font-size: 4.4rem;
  font-family: "Poppins", sans-serif;
  line-height: normal;
  padding: 1rem 1rem 1.5rem 2rem;
  border-radius: 7rem;
  color: #fff;
  background: #9f00ee;
`;

const FacciamoSpan = styled.span`
  padding-left: 1rem;
  font-size: 4.4rem;
  font-family: "Poppins", sans-serif;
  line-height: normal;
`;

const FacciamoPara = styled.div`
  text-align: center;
  margin-left: 54rem;
  margin-right: 60rem;
  margin-top: 5rem;
`;

const FacciamoParaParagraph = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #00204c;
`;

const FacciamoPara1 = styled.div`
  text-align: center;
  margin-left: 54rem;
  margin-right: 53rem;
  margin-top: 5rem;
  margin-bottom: 10rem;
`;

const FacciamoParaParagraph1 = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #00204c;
`;

const OuterFacciamoDiv = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 0 0 40rem;
`;

const PlatFormDiv = styled.div`
  background: linear-gradient(
      180deg,
      rgba(110, 110, 110, 0),
      rgba(167, 0, 250, 0.75)
    ),
    url("platform.webp") no-repeat;
  background-size: 100% 100%;
  min-height: 360px;
  border-radius: 25px;

  width: 210.444px;
  /* height: 205px; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const PlatformSpan = styled.span`
  font-size: 2.8rem;
  font-weight: 600;
  color: white;
  padding: 3rem;
`;

const EcommerceDiv = styled.div`
  background: linear-gradient(
      180deg,
      rgba(110, 110, 110, 0),
      rgba(167, 0, 250, 0.75)
    ),
    url("ecommerce.webp") no-repeat;
  background-size: 100% 100%;
  min-height: 360px;
  border-radius: 25px;

  width: 210.444px;
  /* height: 205px; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const EcommerceSpan = styled.span`
  font-size: 2.8rem;
  font-weight: 600;
  color: white;
  padding: 3rem;
`;

export default Facciamo;
