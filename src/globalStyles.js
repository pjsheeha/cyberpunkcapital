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
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.black};

    transition: all 0.50s linear;
  }
  .yellow {
    
    color: ${({ theme }) => theme.yellow};
    text-decoration:none;
    transition: all 0.50s linear;
  }
  .save-button {

    background-color: ${({ theme }) => theme.black};
    color:${({ theme }) => theme.yellow};


    padding:3px 6px;
    text-decoration:none;
    border-radius:5px;
    transition: all 0.50s linear;
    cursor:pointer;
  }
  .save-button:hover {
    
    background-color: ${({ theme }) => theme.yellow};
    color:${({ theme }) => theme.black};
    border-style:none;padding:2;
    text-decoration:none;
    border-radius:5px;
    transition: all 0.50s linear;
  }
  .save-button:focus {
    
    border-outline:2px;
  }
  .black {
    
    color: ${({ theme }) => theme.black};
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
  .Toastify__toast--default {
    background: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.yellow};
    font-family:
    transition: all 0.50s linear;

 }
  .l-footer_button-present{
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.yellow};
    cursor:pointer;
    transition: all 0.50s linear;

  }
  .l-footer_button-present:hover{
    text-decoration:underline;

  }
  .l-footer_button-platforms{

    transition: all 0.50s linear;

  }
  .dropbtn {
    background-color: transparent;
    color: ${({ theme }) => theme.black};
    font-size: 16px;
    border: none;
    transition: all 0.50s linear;

  }
  
  .dropdown {
    position: relative;
    display: inline-block;
    transition: all 0.1s linear;

  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    padding:5px;
    margin: 0px;
    background-color: ${({ theme }) => theme.black};
    max-width: 250px;
    max-height: 350px;
    overflow-y: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    list-style-type: upper-alpha;
    transition: all 0.1s linear;


  }
  
  .dropdown-content a {
    color:${({ theme }) => theme.yellow};
    padding: 12px 0px;
    text-decoration: none;
    display: block;
    list-style: none;
    transition: all 0.1s linear;

  }
  .dropdown-content ul { 
    list-style: none;
    padding:2px;
    list-style-position: inside;
    color:${({ theme }) => theme.yellow};
    transition: all 0.1s linear;

}
  .dropdown-content ul ul { 
    list-style: none;
    padding:0px 4px;
    list-style-position: inside;
    color:${({ theme }) => theme.yellow};
    transition: all 0.1s linear;

}
  .dropdown-content ul ul ul { 
    list-style: none;
    padding:0px 4px;
    list-style-position: inside;
    color:${({ theme }) => theme.yellow};
    transition: all 0.1s linear;


}
  .dropdown-content ul ul ul ul {
    list-style: none;
    padding:0px 4px;
    list-style-position: inside;
    color:${({ theme }) => theme.yellow};
    transition: all 0.1s linear;

  }
  .dropdown-content ul ul ul ul ul { 
    list-style: none;
    padding:0px 4px;
    list-style-position: inside;
    color:${({ theme }) => theme.yellow};
    transition: all 0.1s linear;

} 
  
  .dropdown-content a:hover {background-color: ${({ theme }) => theme.lightblack}; color:${({ theme }) => theme.yellow}        transition: all 0.1s linear;

}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {color:${({ theme }) => theme.black};       transition: all 0.1s linear;

}
  `