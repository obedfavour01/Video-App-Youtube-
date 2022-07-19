 import React from 'react'
import styled from 'styled-components'
import logo from '../images/youtube.png'
import {Link} from 'react-router-dom'
import{ AccountCircleOutlined, ArticleOutlined, ExploreOutlined, FlagOutlined, HelpOutlineOutlined, HistoryOutlined, Home, LibraryMusicOutlined, LiveTvOutlined, MovieOutlined, SettingsBrightnessOutlined, SettingsOutlined, SportsBasketballOutlined, SportsEsportsOutlined, SubscriptionsOutlined, VideoLibraryOutlined} from '@mui/icons-material';
 const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.bg}; 
    height: 100vh; 
    color: ${({theme}) => theme.text};
    position: sticky;
    top: 0;
    overflow-y: scroll;
    overflow-x: hidden;
 
    ::-webkit-scrollbar{
        width: 7px;
      
      }
    ::-webkit-scrollbar-track{
        background-color: ${({theme}) => theme.bg}
    }
    ::-webkit-scrollbar-thumb{
        background:  grey;
        border-radius: 10px;
        height: 30px;

    }
 `

const Wrapper = styled.div`
    padding: 18px 26px;

`

const Logo = styled.div`
   display: flex;
   align-items: center;
   width: 36px;
   font-weight: bold;
   height: 36px;
   


    &  img {
        width: 100%;
    }

    & > h3{
        line-height: 40px;
        height: 40px;

    }
`
    const Item = styled.div`
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
        padding: 7.5px 0px;
      

        &:hover {
            background-color: ${({theme}) => theme.soft}
        }
    `


const Hr = styled.hr`
    margin: 15px 0px;
    width: calc(100vw / 9) ;
    border: 0.3px solid ${({theme}) => theme.textSoft};
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
`

const Login = styled.div`
    
`

const Title = styled.h2`
    font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.softText};
  margin-bottom: 20px;
`
 const Menu = ({darkMode,setDarkMode}) => {
   return (
    <Container>

        <Wrapper>
    <Link to = '/' style={{textDecoration: "none",color: 
  "inherit"}}>

            <Logo>
                <img src= {logo} alt="logo" />
               <h3> YouTube</h3> 
            </Logo>
  </Link>
            <Item> 
            <Home/> Home
            </Item> 

            <Item>
                <ExploreOutlined/>
                Explore
            </Item>
            <Item>
          <SubscriptionsOutlined />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined/>
          History
        </Item>
        <Hr />
        <Login>

<Link to = "/signin" style={{textDecoration: "none",color: 
  "inherit"}}>
            <Button>
              <AccountCircleOutlined/>
              SIGN IN
            </Button>
</Link>
         
        </Login>
        <Hr />
        <Title>Best Of ObedTube</Title>
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined/>
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />
          Gaming
        </Item>
        <Item>
          <MovieOutlined/>
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        <Item>
          <FlagOutlined/>
          Report
        </Item>
        <Item>
          <HelpOutlineOutlined/>
          Help
        </Item>

        <Item  onClick = {() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
        </Wrapper>
      
    </Container>
   )
 }
 
 export default Menu