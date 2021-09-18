import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import UserInfo from './UserInfo';

export default function UserCard({user_data}) {
  const img_src = `https://avatars.dicebear.com/v2/avataaars/${user_data["username"]}.svg?options[mood][]=happy`;

  return (
    <Card sx={{ maxWidth: 345 }} className="user-card">
      <CardMedia className="card-img" component="img" alt="green iguana" height="140" image={img_src}/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className="card-title">{user_data["name"]}</Typography>
        <UserInfo data={user_data}/>
      </CardContent>
      <CardActions className="card-footer">
        <IconButton aria-label="like" color="error"><FavoriteBorderTwoToneIcon /></IconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <IconButton aria-label="edit"><EditTwoToneIcon /></IconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <IconButton aria-label="delete"><DeleteTwoToneIcon /></IconButton>
      </CardActions>
    </Card>
  );
}
