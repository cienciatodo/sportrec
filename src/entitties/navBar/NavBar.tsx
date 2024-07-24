
import Logo from '../logo/Logo'

import './navBar.css'
import house from '../../../public/icons/navigation/house.svg'
import signal from '../../../public/icons/navigation/signal.svg'
import people from '../../../public/icons/navigation/people.svg'

import houseOrganization from '../../../public/icons/navigation/houseOrganisation.svg'

import bag from '../../../public/icons/navigation/bag.svg'
import trophy from '../../../public/icons/navigation/trophy.svg'
import { useTranslation } from 'react-i18next'




const NavBar = () => {
  const {t} =useTranslation()
  return (

   
    <>

    <div style={{display:'flex' , gap:'16px'}}>
      <Logo/>

      <div style={{display:'flex', }}>
        <div className='click' style={{display:'flex', padding:'8px',  gap:'10px' , marginRight: '5px'}}>
          <img  src={house} alt="houseIcon" />
          <span className='navLetters' style={{color:'#06082C'}}>{t("FeedLabel")}</span>
        </div>
        <div className='click'  style={{display:'flex',  padding:'8px', gap:'10px',marginRight: '5px'}}>
          <img src={bag} alt="houseIcon" style={{cursor:'pointer',}} />
          <span className='navLetters'>{t("MarketplaceLabel")}</span>
        </div>
        <div className='click' style={{display:'flex', padding:'8px',gap:'10px',marginRight: '5px'}}>
          <img src={people} alt="houseIcon" />
          <span className='navLetters'>{t( "RatingLabel")}</span>
        </div>
        <div className='click' style={{display:'flex' , padding:'8px', gap:'10px' ,marginRight: '5px'}}>
          <img src={houseOrganization} alt="houseIcon" />
          <span className='navLetters'>{t("RatingLabel")}</span>
        </div>
        <div className='click' style={{display:'flex',  padding:'8px', gap:'10px', marginRight: '5px'}}>
          <img src={trophy} alt="houseIcon" />
          <span className='navLetters'>{t("OrganizationsLabel")}</span>
        </div>
        <div className='click' style={{display:'flex', padding:'8px', gap:'10px', marginRight: '5px'}}>
          <img src={houseOrganization} alt="houseIcon" />
          <span className='navLetters'>Live</span>
        </div>
        <div className='click' style={{display:'flex' , padding:'8px', gap:'10px', marginRight: '5px'}}>
          <img src={signal} alt="houseIcon" />
          <span className='navLetters'>Live</span>
        </div>
      </div>


    </div>


    </>
  )

}

export default NavBar




// <Toolbar>
// <Box>
//  <Box sx={{display:'flex', flexDirection: 'row' , alignItems:'flexStart', backgroundColor:'blue'}}>

//    <Logo/>

  
//   <Stack direction={'row'}>
//      <Stack direction={'row'} sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'84px', height:'36px', padding:'8px' , gap: '10px', alignItems:'center'}}>
       
//        <Box >
//          <Icons  iconFolder='navigation' type='house' className='icon'/>       
//        </Box>
//        <Typography  className='navBarLetters'>Лента</Typography>
//      </Stack>

//      <Stack direction={'row'} sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'84px', height:'36px', padding:'8px' , gap: '10px', alignItems:'center'}}>
//        <Box >
//          <Icons  iconFolder='navigation' type='bag' className='icon'/>       
//        </Box>
//        <Typography className='navBarLetters'>Маркетплейс</Typography>
//      </Stack>
  
//   </Stack>
//  </Box>
// </Box>
// </Toolbar>





