import {Box} from "@chakra-ui/react"
import HeaderTop from "../pageparts/Header"
import New from "./New"



const Layout = (props) => {
    return (
        <Box>
            {/* Housing the top section and Header in HeaderTOP */}
          <HeaderTop/> 
        
  
          {props.children}
        </Box>
    );
}

export default Layout;