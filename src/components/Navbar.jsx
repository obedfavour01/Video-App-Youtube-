import React from 'react'
import styled from 'styled-components'
import{ SearchOutlined,AccountCircleOutlined} from '@mui/icons-material';
import {Link } from 'react-router-dom'
const Container = styled.div`
position:sticky;
top:0;
background-color: ${({theme}) => theme.bgLighter}; 
height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px;
  position: relative;


`
const Search = styled.div`
position: absolute;
width: 40%;
left: 0;
right: 0;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius:3px;
order: 1;

`
const Input = styled.input`
border: none;
background-color: transparent;
outline:none;
width: 70%;
height: 100%;
color: ${({theme}) => theme.text};
` 

const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color:#3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
position: absolute;
right: 10px;
top: 0;  


`

const Navbar = () => {
  return (
   <Container>
      <Wrapper>
      



        

        <Search>
          <Input placeholder='Search'/>
        <SearchOutlined style = {{color: `${({theme}) => theme.text }`}}/>
        
        </Search>

        <Link to = "/signin" style={{textDecoration: "none",color: 
  "inherit"}}>
            <Button>
              <AccountCircleOutlined/>
              SIGN IN
            </Button>
</Link>
      </Wrapper>
   </Container>
  )
}

export default Navbar