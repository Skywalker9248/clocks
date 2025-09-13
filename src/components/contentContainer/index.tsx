import { Tab, Tabs } from "react-bootstrap";
import { styled } from "styled-components";
import DigitalClock from "../digitalCock";
import BlockClock from "../blockClock";

const ContentContainer = () => {
  return (
    <ContentContainerDiv>
      <h1 className="mx-3 mb-4">Collections of Clocks</h1>
      <StyledTabs>
        <Tab eventKey="digital" title="Digital Clock">
            <DigitalClock />
        </Tab>
        <Tab eventKey="analog" title="Block Clock">
            <BlockClock />
        </Tab>
        <Tab eventKey="other" title="Other">
            <h2>Other</h2>
        </Tab>
      </StyledTabs>
    </ContentContainerDiv>
  );
};
const ContentContainerDiv = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 2rem 3rem 0 0;
`;

const StyledTabs = styled(Tabs)`
  color: ${({ theme }) => theme.tabText};
    font-weight: 600;
  &&& {
    --bs-nav-tabs-link-active-bg: ${({ theme }) => theme.tabActiveBackground};
    --bs-nav-tabs-link-active-color: ${({ theme }) => theme.tabActiveText};
    --bs-nav-tabs-link-color: ${({ theme }) => theme.tabText};
    --bs-nav-tabs-link-hover-color: ${({ theme }) => theme.tabText};
    --bs-nav-tabs-link-hover-border-color: ${({ theme }) => theme.tabBorder};
    --bs-nav-tabs-border-color: ${({ theme }) => theme.tabBorder};
    
    .nav-tabs {
      border-bottom: 1px solid ${({ theme }) => theme.tabBorder};
      color: ${({ theme }) => theme.tabText};
      
      .nav-link {
        color: ${({ theme }) => theme.tabText} !important;
        background-color: ${({ theme }) => theme.tabBackground} !important;
        border: 1px solid ${({ theme }) => theme.tabBorder} !important;
        border-bottom: none !important;
        
        &:hover {
          color: ${({ theme }) => theme.tabText} !important;
          background-color: ${({ theme }) => theme.tabHoverBackground} !important;
          border-color: ${({ theme }) => theme.tabBorder} !important;
        }
        
        &.active {
          color: ${({ theme }) => theme.tabActiveText} !important;
          background-color: ${({ theme }) => theme.tabActiveBackground} !important;
          border-color: ${({ theme }) => theme.tabBorder} !important;
          border-bottom-color: ${({ theme }) => theme.tabActiveBackground} !important;
        }
        
        &.nav-link.active {
          color: ${({ theme }) => theme.tabActiveText} !important;
          background-color: ${({ theme }) => theme.tabActiveBackground} !important;
          border-color: ${({ theme }) => theme.tabBorder} !important;
          border-bottom-color: ${({ theme }) => theme.tabActiveBackground} !important;
        }
      }
    }
    
    .tab-content {
      background-color: ${({ theme }) => theme.background};
      border: 1px solid ${({ theme }) => theme.tabBorder};
      border-top: none;
      padding: 1rem;
      margin-top: -1px;
    }
  }
`;

export default ContentContainer;
