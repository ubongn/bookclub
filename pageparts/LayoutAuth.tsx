import {Box} from "@chakra-ui/react"
import HeaderAuth from "../pageparts/HeaderAuth"




const Layout = (props) => {
    return (
        <Box>
            {/* Housing the top section and Header in HeaderTOP */}
          <HeaderAuth/> 
    
          {props.children}
        </Box>
    );
}

export default Layout;