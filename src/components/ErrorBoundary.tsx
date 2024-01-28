// ErrorBoundary.tsx
import React from "react";
import Spinner from "./Spinner";
import { ErrorBoundaryProps } from "../types";
import { Container, Typography, styled } from "@mui/material";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("Chyba:", error.error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <StyledContainer>
      {hasError ? (
        <>
          <Typography variant="h4" gutterBottom>
            An error occurred !!!
          </Typography>
          <Spinner />
        </>
      ) : (
        <>{children}</>
      )}
    </StyledContainer>
  );
};

export default ErrorBoundary;
