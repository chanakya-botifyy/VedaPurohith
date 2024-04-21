import {Typography} from '@mui/material'
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'
import AdminTopMenu from './AdminTopMenu'

export default function AdminLayout(){
    return (
        <div style={{width:'100%'}}>
            <div style={{position:'fixed', left:'0px', top:'0px', backgroundColor:'#F3F2F7', height:'100vh', width:'100%', zIndex:'-1000'}}></div>
            <div style={{zIndex:'0'}}>
                <SideMenu />
                <AdminTopMenu />
                <div style={{position:'absolute', top:'107px', left:'270px', width:'81.45%'}}>
                    <Outlet/>
                </div>
            </div>
            
             
        </div>
    )
}