import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PhoneEnabledTwoToneIcon from '@mui/icons-material/PhoneEnabledTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';

export default function UserInfo({data}) {
  return (
    <List>
        <ListItem disablePadding>
        <ListItemButton className="list">
            <ListItemIcon className="list-icon"><EmailTwoToneIcon /></ListItemIcon>
            <ListItemText primary={data["email"]} />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton className="list">
            <ListItemIcon className="list-icon"><PhoneEnabledTwoToneIcon /></ListItemIcon>
            <ListItemText primary={data["phone"]} />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton className="list">
            <ListItemIcon className="list-icon"><LanguageTwoToneIcon /></ListItemIcon>
            <ListItemText primary={data["website"]} />
        </ListItemButton>
        </ListItem>
    </List>
  );
}
