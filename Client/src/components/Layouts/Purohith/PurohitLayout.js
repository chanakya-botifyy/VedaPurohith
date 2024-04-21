import {Typography} from '@mui/material'
import { Outlet } from 'react-router-dom'
import PurohitSideMenu from './PurohitSideMenu'
import AdminTopMenu from '../Admin/AdminTopMenu'

export default function PurohitLayout(){
    return (
        <div style={{backgroundColor:'#F3F2F7', height:'1700px', width:'100%'}}>
            <PurohitSideMenu />
            <AdminTopMenu />
            <div style={{position:'absolute', top:'107px', left:'270px', width:'81.45%'}}>
                <Outlet/>
            </div>
             
        </div>
    )
}