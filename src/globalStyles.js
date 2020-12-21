import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.black};
    
    transition: all 0.50s linear;
  }
  .grey{
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
  .grey:hover{
    
    text-decoration: underline;
  }
  .ua__content{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .sticky-inner {
    background: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.black};
    transition: all 0.50s linear;
  }
  .yellow {
    
    color: ${({ theme }) => theme.yellow};
    transition: all 0.50s linear;
  }
  .faded-yellow {
    
    color: ${({ theme }) => theme.fadedYellow};
    transition: all 0.50s linear;
  }
  .l-footer{
    background-color:${({ theme }) => theme.black};
  }
  .l-footer__platforms{
    background-color: ${({ theme }) => theme.black};
    transition: all 0.50s linear;

  }
  .l-footer_button-present{
    background-color: ${({ theme }) => theme.black};
    color:${({ theme }) => theme.yellow};
    transition: all 0.50s linear;

  }
  .l-footer_button-platforms{
    background-color: ${({ theme }) => theme.black};
    color:${({ theme }) => theme.yellow};
    transition: all 0.50s linear;

  }
  `