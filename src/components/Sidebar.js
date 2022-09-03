import {Stack} from '@mui/material';
import { categories } from './utils/Constants';

const Sidebar = ({selectedCategory,setSelectedCategory}) =>  (
    <Stack sx={{overflowY:'auto',background:'#fff', height:{sx:'auto', md:'95%'}, flexDirection: {md : 'column'}}}>
        {categories.map((category) => (
            <button className="category-btn" onClick={() =>{setSelectedCategory(category.name)}} style={{background: category.name === selectedCategory && '#e5e5e5', color:'#000'}} key={category.name}>
                <span style={{ marginRight:'15px' }}>{category.icon}</span>
                <span style={{opacity: category.name ===selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )


export default Sidebar