import React from 'react';
import { useNavigate } from 'react-router-dom';
import SiteTitle from '../components/SiteTitle';
import styled from 'styled-components';
import { HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  overflow: auto;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: clamp(20px, 5vw, 40px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: min(90%, 500px);
  margin: auto;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IconWrapper = styled.div`
  margin-bottom: clamp(16px, 4vw, 24px);
  color: #ff4d4f;
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(36px, 8vw, 72px);
  color: #1a3353;
  margin-bottom: clamp(8px, 2vw, 16px);
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: clamp(16px, 3vw, 20px);
  color: #4a5568;
  margin-bottom: clamp(16px, 4vw, 24px);
  line-height: 1.4;
`;

const AdditionalText = styled.p`
  margin-top: clamp(12px, 3vw, 16px);
  color: #718096;
  font-size: clamp(12px, 2vw, 14px);
  line-height: 1.5;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledButton = styled(Button)`
  height: clamp(40px, 6vw, 45px);
  padding: 0 clamp(24px, 4vw, 32px);
  font-size: clamp(14px, 2.5vw, 16px);
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(90deg, #3894e4 0%, #2873b6 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(56, 148, 228, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(56, 148, 228, 0.4);
    background: linear-gradient(90deg, #2873b6 0%, #3894e4 100%);
  }
`;

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem('token');

  return (
    <StyledContainer>
      <ContentWrapper>
        <Title>404</Title>
        <Subtitle>Oops! The page you're looking for doesn't exist.</Subtitle>
        <StyledButton
          onClick={() => navigate(isAuthenticated ? '/mor/dashboard' : '/')}
        >
          <HomeIcon size={16} />
          Back to {isAuthenticated ? 'Dashboard' : 'Home'}
        </StyledButton>
        <AdditionalText>
          Let's get you back on track. Click the button above to return to the {isAuthenticated ? 'dashboard' : 'home page'}.
        </AdditionalText>
      </ContentWrapper>
    </StyledContainer>
  );
};

export default NotFound;
