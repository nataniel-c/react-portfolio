import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Project({ projects }) {
  return (
    <div className="project-container">
      {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
      {projects.map((project) => (
      <Card sx={{ 
          margin: 2,
          height: 600, 
          justifyContent: 'start',
          alignItems: 'center', 
          width: 500, 
          display: 'flex',
          flexWrap: 'no-wrap',  
          flexDirection: 'column',
          }} className='project-card'>
          <a href={project.weblink}><CardMedia
            sx={{ width: 500, minHeight: 300, objectFit: 'cover'}}
            image={project.thumbnail}
            title={project.alttext}
            className='project-thumbnail'
          /></a>
          <CardContent sx={{ height: 200, alignSelf: 'stretch' }} className="cardbg">
            <Typography gutterBottom variant="h4" component="div">
              <a href={project.weblink}><h3>{`${project.name}`}</h3></a>
            </Typography>
            <Typography variant="body1">
              <h1 className='body-text'>{`${project.description}`}</h1>
            </Typography>
          </CardContent>
        <CardActions sx={{ alignSelf: 'stretch', height: 100 }} className="cardbg">
          <Button size="small">
            <a href={project.weblink}>
              <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Chain_link_icon_slanted.png"></img>
            </a>
          </Button>
          <Button size="small">
              <a href={project.githublink}>
                <img className="logo" src="https://www.svgrepo.com/show/361181/github.svg"></img>
              </a>
          </Button>
        </CardActions>
      </Card>
      ))}
    </div>
    
  );
}

export default Project;
