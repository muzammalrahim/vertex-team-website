import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <Wrapper>
      <OuterDiv>
        <HeroPlusIcon>
          <PlusImg src="plus.webp" alt="not found" />
        </HeroPlusIcon>

        <OuterHeroCaretIcon>
          <HeroCaretIcon>
            <HeroCaretInner>
              <Link
                activeClass="active"
                to="perche"
                spy={true}
                smooth={true}
                offset={50}
              >
                <AtRateImg src="atrate.webp" alt="not found" />
              </Link>
              <HeroPara>
                <HeroParaHeading>à la carte</HeroParaHeading>

                <HeroParaParagraph>App Mobile e Web</HeroParaParagraph>
              </HeroPara>
            </HeroCaretInner>
          </HeroCaretIcon>
        </OuterHeroCaretIcon>

        <HeroCircleIcon>
          <CircleImg src="circle.webp" alt="not found" />
        </HeroCircleIcon>
      </OuterDiv>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 6rem 25rem;
`;

const OuterDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 9rem;
`;

const HeroPlusIcon = styled.div``;

const OuterHeroCaretIcon = styled.div`
  margin-top: -5rem;
`;

const HeroCaretIcon = styled.div`
  padding: 3rem;
  width: 60%;
  background: #fff;
  border-radius: 3rem;
  box-shadow: 6.43px 7.66px 10px 0px rgba(167, 0, 250, 0.1);
`;

const HeroCaretInner = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const AtRateImg = styled.img`
  border: 4px solid lightblue;
  border-radius: 3rem;
`;

const HeroCircleIcon = styled.div`
  margin-left: 8rem;
`;

const HeroPara = styled.div``;

const HeroParaHeading = styled.h1`
  font-size: 20px;
`;

const HeroParaParagraph = styled.h1`
  font-size: 15px;
  font-weight: 800;
`;

const CircleImg = styled.img``;

const PlusImg = styled.img``;

export default HeroSection;
